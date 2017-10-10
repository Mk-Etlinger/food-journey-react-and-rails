class Meal < ApplicationRecord
  belongs_to :user
  has_many :meal_ingredients, dependent: :destroy
  has_many :ingredients, through: :meal_ingredients

  validates_presence_of :meal_type

  scope :for_user, ->(user) { where(:user_id => user.id) }
  scope :created_within, ->(time, occurred_at) { where("created_at > ? AND created_at < ?", time, occurred_at) }

  def parse_ingredients(meal_ingredients)
    meal_ingredients.split(',').each do |ingredient|
      self.ingredients << Ingredient.find_or_create_by(name: ingredient.strip.downcase)
    end
  end

  def ingredients_attributes=(ingredients_attributes)
    meal_ingredients = ingredients_attributes['name']
    self.ingredients.clear
    if meal_ingredients.include?(',')
      parse_ingredients(meal_ingredients)
    else
      self.ingredients << Ingredient.find_or_create_by(name: meal_ingredients.strip.downcase)
    end
  end
end
