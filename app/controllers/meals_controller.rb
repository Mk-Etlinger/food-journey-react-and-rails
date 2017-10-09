class MealsController < ApplicationController
  # before_action :user_signed_in?, :authenticate_user!
  before_action :set_meal, only: [:show, :update, :destroy]
  before_action :authenticate_user

  def index
    @meals = current_user.meals.order(created_at: :desc)
                         .group_by{ |meal| meal.created_at.strftime("%b #{meal.created_at.day.ordinalize}") }
    render json: @meals.as_json(include: :ingredients)
  end

  def recent
    @meals = current_user.meals.order(created_at: :desc).limit(30)
                         .group_by{ |meal| meal.created_at.strftime("%b #{meal.created_at.day.ordinalize}") }
    render json: @meals.as_json(include: :ingredients)
  end

  def show
    render json: @meal
  end

  def create
    @meal = current_user.meals.build(meal_params)

    if @meal.save
      key = @meal.created_at.strftime("%b #{@meal.created_at.day.ordinalize}")
      @formatted_meal = Hash[key, @meal]
      render json: @formatted_meal.as_json(include: :ingredients)
    else
      render json: { error: 'Unable to save meal, please try again.' }
    end
  end

  def edit
    # if user_authorized?
    #   render :edit
    # else
    #   redirect_to dashboard_path
    # end
  end

  def update
    if user_authorized? && @meal.update(meal_params)
      render json: @meal
    else
      render json: { message: 'Unable to save, please try again' }
    end
  end

  def destroy
    if user_authorized?
      @meal.ingredients.clear
      @meal.destroy
      redirect_to dashboard_path
    else
      redirect_back fallback_location: root_path
    end
  end

  private

  def set_meal
    @meal = Meal.find_by(id: params[:id])
  end

  def meal_params
    params.require(:meal).permit(:meal_type,
                                 :description,
                                 ingredient_ids: [],
                                 ingredients_attributes: [:name])
  end

  def user_authorized?
    @meal.user == current_user
  end
end
