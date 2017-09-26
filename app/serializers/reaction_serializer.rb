class ReactionSerializer < ActiveModel::Serializer
  attributes :id, :ingredient_id, :symptom_id, :severity, :stress_level, :notes, :occurred_at
  belongs_to :ingredient
  belongs_to :symptom
end
