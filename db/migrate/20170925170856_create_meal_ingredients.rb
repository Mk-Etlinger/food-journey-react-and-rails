class CreateMealIngredients < ActiveRecord::Migration[5.1]
  def change
    create_table :meal_ingredients do |t|
      t.references :meal, foreign_key: true
      t.references :ingredient, foreign_key: true

      t.timestamps
    end
  end
end
