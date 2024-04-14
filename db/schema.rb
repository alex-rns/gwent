# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.1].define(version: 2024_03_18_214644) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "cards", force: :cascade do |t|
    t.bigint "row_id", null: false
    t.integer "points"
    t.integer "original_points"
    t.boolean "is_hero", default: false
    t.string "abilities"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["row_id"], name: "index_cards_on_row_id"
  end

  create_table "games", force: :cascade do |t|
    t.integer "current_player_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["current_player_id"], name: "index_games_on_current_player_id"
  end

  create_table "players", force: :cascade do |t|
    t.bigint "game_id", null: false
    t.string "name"
    t.integer "score", default: 0
    t.integer "lives"
    t.boolean "is_active", default: false
    t.boolean "joined_game", default: false
    t.string "faction"
    t.string "leader"
    t.boolean "leader_ability_used", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["game_id"], name: "index_players_on_game_id"
  end

  create_table "rows", force: :cascade do |t|
    t.bigint "player_id", null: false
    t.string "row_type"
    t.string "effect"
    t.boolean "weather", default: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["player_id"], name: "index_rows_on_player_id"
  end

  add_foreign_key "cards", "rows"
  add_foreign_key "players", "games"
  add_foreign_key "rows", "players"
end
