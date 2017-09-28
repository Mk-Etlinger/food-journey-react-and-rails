class ReactionSerializer < ActiveModel::Serializer
  attributes :id, :ingredient_id, :symptom_id, :severity, :stress_level, :notes
  belongs_to :ingredient
  belongs_to :symptom
  has_many :reaction_logs
end
