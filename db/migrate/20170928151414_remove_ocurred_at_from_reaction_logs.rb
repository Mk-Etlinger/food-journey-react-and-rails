class RemoveOcurredAtFromReactionLogs < ActiveRecord::Migration[5.1]
  def change
    remove_column :reaction_logs, :ocurred_at, :datetime
  end
end
