class CreateGames < ActiveRecord::Migration[7.1]
  def change
    create_table :games do |t|
      t.integer :current_player_id, index: true
      t.timestamps
    end
  end
end
