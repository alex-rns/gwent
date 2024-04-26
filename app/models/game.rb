class Game < ApplicationRecord
  has_many :players
  belongs_to :current_player, class_name: 'Player', optional: true

  def reset_game(fully = true)
    players.each { |player| player.reset_state!(fully) }
  end

  def end_of_turn
    if players.map(&:score).uniq.length == 1
      players.each { |player| player.decrement!(:lives) }
      reset_game(false)
      { status: 'draw', winner: nil }
    else
      loser = players.min_by(&:score)
      loser.decrement!(:lives)
      loser.zero_lives? ? handle_game_end(loser) : next_turn(loser)
    end
  end

  private

  def handle_game_end(loser)
    reset_game
    { status: 'end_game', winner: loser.opponent }
  end

  def next_turn(loser)
    reset_game(false)
    { status: 'end_match', winner: loser.opponent }
  end
end