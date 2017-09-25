class CreateReactions < ActiveRecord::Migration[5.1]
  def change
    create_table :reactions do |t|
      t.references :ingredient, foreign_key: true
      t.references :symptom, foreign_key: true
      t.integer :severity
      t.integer :stress_level
      t.text :notes
      t.datetime :ocurred_at

      t.timestamps
    end
  end
end
