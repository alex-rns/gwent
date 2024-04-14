class CreatePlayers < ActiveRecord::Migration[7.1]
  def change
    create_table :players do |t|
      t.references :game, null: false, foreign_key: true
      t.string :name
      t.integer :score, default: 0
      t.integer :lives
      t.boolean :is_active, default: false
      t.boolean :joined_game, default: false
      t.string :faction
      t.string :leader
      t.boolean :leader_ability_used, default: false

      t.timestamps
    end
  end
end
