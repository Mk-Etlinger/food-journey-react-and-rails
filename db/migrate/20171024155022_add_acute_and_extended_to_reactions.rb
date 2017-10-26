class AddAcuteAndExtendedToReactions < ActiveRecord::Migration[5.1]
  def change
    add_column :reactions, :reaction_type, :string, default: 'acute'
  end
end
