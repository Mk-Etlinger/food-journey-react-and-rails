class SymptomsController < ApplicationController
  # before_action :user_signed_in?, :authenticate_user!
  before_action :set_symptom, only: [:show, :edit, :update, :destroy]

  def index
    @symptoms = current_user.symptoms.order(created_at: :desc).limit(20)
                  .group_by{ |symptom| symptom.created_at.strftime("%b #{symptom.created_at.day.ordinalize}") }
                      
    render json: @symptoms.as_json(include: :ingredients)
  end

  def recent
    @symptoms = current_user.symptoms.order(created_at: :desc).limit(20)
                  .group_by{ |symptom| symptom.created_at.strftime("%b #{symptom.created_at.day.ordinalize}") }
    render json: @symptoms
  end
  
  def new
    @symptom = Symptom.new
  end
  
  def create
    render json: { message: no_meals_message } and return if valid_meals.empty?

    @symptom = current_user.symptoms.build(update_params())
    if @symptom.save
      render json: @symptom
    else
      render json: { message: 'Unable to save symptom, please try again.'}
    end
  end

  def show
    @reaction = @symptom.reactions.first
    respond_to do |format|
      format.json {render json: @reaction}
      format.html {}
    end
  end

  def edit
  end

  def update
    if user_authorized? && @symptom.update(symptom_params)
      redirect_to dashboard_path
    else
      render :edit
    end
  end

  def destroy
    if user_authorized?
      @symptom.ingredients.clear
      @symptom.destroy
      redirect_to dashboard_path
    else
      redirect_back fallback_location: root_path
    end
  end

  private

  def set_symptom
    @symptom = Symptom.find_by(id: params[:id])
  end

   def symptom_params
    params.require(:symptom).permit(:description,
                                    ingredients_attributes: [:current_user_id, :hours_elapsed, :occurred_at],
                                    reactions_attributes: [:severity, :stress_level, :notes],
                                    reaction_logs: [:occurred_at])
                                    
  end

  def user_authorized?
    @symptom.user == current_user
  end

  def valid_meals
    hours = symptom_params['ingredients_attributes']['occurred_at'].to_f
    occurred_at = Time.current.ago(hours.hour)
    Meal.for_user(current_user).created_within(occurred_at - 3.day, occurred_at)
  end

  def update_params
    merge_user_id_to_ingredients = symptom_params['ingredients_attributes'].merge({current_user_id: current_user.id})
    symptom_params.merge(ingredients_attributes: merge_user_id_to_ingredients)
  end

  def no_meals_message
    "Please create a meal first. Currently you have no meals within the selected time period"
  end

end
