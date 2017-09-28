class RemoveOcurredAtFromReactions < ActiveRecord::Migration[5.1]
  def change
    remove_column :reactions, :ocurred_at, :datetime
  end
end
