class CreateCards < ActiveRecord::Migration[7.1]
  def change
    create_table :cards do |t|
      t.references :row, null: false, foreign_key: true
      t.integer :points
      t.integer :original_points
      t.boolean :is_hero, default: false
      t.string :abilities
      t.timestamps
    end
  end
end
