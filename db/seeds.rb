# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

game = Game.create!
player_names = %w[You Opponent]

2.times do |index|
  player = game.players.create(name: player_names[index], lives: 2)
  %w[front middle back].each do |row_type|
    player.rows.create(row_type:)
  end
end

Player.all.each do |player|
  player.rows.each do |row|
    row.cards.create!(
      points: rand(0..15),
      abilities: Card.abilities.keys.sample,
      is_hero: [true, false].sample
    )
  end
end
