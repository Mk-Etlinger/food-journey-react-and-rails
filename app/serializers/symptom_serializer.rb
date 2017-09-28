class SymptomSerializer < ActiveModel::Serializer
  attributes :id, :description
  has_many :ingredients
  has_many :reactions
  has_many :reaction_logs
end
