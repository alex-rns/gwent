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
