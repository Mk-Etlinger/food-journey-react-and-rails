class CreateMeals < ActiveRecord::Migration[5.1]
  def change
    create_table :meals do |t|
      t.string :meal_type
      t.string :description
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
