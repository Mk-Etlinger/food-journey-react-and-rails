class SymptomSerializer < ActiveModel::Serializer
  attributes :id, :description, :created_at
  has_many :ingredients
  has_many :reactions
  has_many :reaction_logs
end
