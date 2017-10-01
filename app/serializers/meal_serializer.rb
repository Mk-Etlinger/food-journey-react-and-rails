class MealSerializer < ActiveModel::Serializer
  attributes :id, :description, :meal_type, :created_at
  has_many :ingredients
end