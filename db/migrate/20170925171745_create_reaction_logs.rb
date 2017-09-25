class CreateReactionLogs < ActiveRecord::Migration[5.1]
  def change
    create_table :reaction_logs do |t|
      t.references :reaction, foreign_key: true
      t.datetime :ocurred_at

      t.timestamps
    end
  end
end
