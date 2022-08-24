class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :text
      t.string :answer_one
      t.string :answer_two
      t.string :answer_three
      t.string :answer_four
      t.integer :correct
    end
  end
end
