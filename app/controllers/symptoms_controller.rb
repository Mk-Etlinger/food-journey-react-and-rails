class SymptomsController < ApplicationController
  before_action :authenticate_user
  before_action :set_symptom, only: [:show, :update, :destroy]

  def index
    @symptoms = current_user.symptoms.order(created_at: :desc)
    render json: @symptoms
  end

  def recent
    @symptoms = current_user.symptoms.order(created_at: :asc).limit(20)
    render json: @symptoms
  end

  def new
    @symptom = Symptom.new
  end

  def create
    render json: { message: no_meals_message }, status: 400 and return if valid_meals.empty?
    @symptom = current_user.symptoms.build(update_params)

    if @symptom.save
      render json: @symptom
    else
      render json: { message: 'Unable to save symptom, please try again.' }
    end
  end

  # def show
  #   @reaction = @symptom.reactions.first
    # render json: @reaction
  # end

  def update
    if user_authorized? && @symptom.update(symptom_params)
      render json: @symptom
    else
      render json: { message: 'Unable to save symptom, please try again.'}
    end
  end

  def destroy
    if user_authorized?
      @symptom.ingredients.clear
      @symptom.destroy
      render json: { message: 'Delete Successful' }
    else
      render json: { message: 'Unable to delete symptom, please try again.' }
    end
  end

  def most_symptomatic_ingredients
    @symptomatic_ingredients = Symptom.joins(:ingredients).group("ingredients.name").count
    render json: @symptomatic_ingredients
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
    @symptom.user_id == current_user.id
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
