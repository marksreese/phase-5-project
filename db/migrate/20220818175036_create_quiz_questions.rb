class CreateQuizQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :quiz_questions do |t|
      t.belongs_to :quiz, null:false, foreign_key: true
      t.belongs_to :question, null:false, foreign_key: true
    end
  end
end
