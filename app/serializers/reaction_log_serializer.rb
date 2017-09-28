class ReactionLogSerializer < ActiveModel::Serializer
  attributes :id, :occurred_at
  belongs_to :symptom, serializer: ReactionTimeSerializer
end
