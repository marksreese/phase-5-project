class QuizSerializer < ActiveModel::Serializer
  attributes :id, :score
  has_one :user
end
