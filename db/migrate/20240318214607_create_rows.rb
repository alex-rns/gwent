class CreateRows < ActiveRecord::Migration[7.1]
  def change
    create_table :rows do |t|
      t.references :player, foreign_key: true, null: false
      t.string :row_type
      t.string :effect
      t.boolean :weather, default: false
      t.timestamps
    end
  end
end
