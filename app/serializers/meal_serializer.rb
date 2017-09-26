class MealSerializer < ActiveModel::Serializer
  attributes :id, :description, :meal_type
  has_many :ingredients
end