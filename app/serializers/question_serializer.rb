class QuestionSerializer < ActiveModel::Serializer
  attributes :id, :text, :answer_one, :answer_two, :answer_three, :answer_four, :correct
end
