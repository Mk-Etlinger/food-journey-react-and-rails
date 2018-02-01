class IngredientsController < ApplicationController

  def index
    @meal = Meal.find_by(id: params[:meal_id])
    render json: @meal
  end

  private

  def ingredient_params
    params.require(:ingredient).permit(id: [])
  end

  def set_ingredient
    @ingredient = Ingredient.find_by(id: params[])
  end
  
end
