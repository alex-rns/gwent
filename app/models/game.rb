class Game < ApplicationRecord
  has_many :players
  belongs_to :current_player, class_name: 'Player', optional: true

  attr_accessor :round_winner

  def reset_game(fully = true)
    players.each { |player| player.reset_state!(fully) }
  end

  def end_of_turn
    draw? ? handle_draw : handle_match
  end

  def draw?
    players.map(&:score).uniq.length == 1
  end

  private

  def handle_draw
    players.each { |player| player.decrement!(:lives) unless player.faction == 'nilfgaard' }
    reset_game(false)
    self.round_winner = nil
    { status: 'draw', winner: nil }
  end

  def handle_match
    loser = players.min_by(&:score)
    winner = players.max_by(&:score)
    self.round_winner = winner
    loser.decrement!(:lives)
    loser.zero_lives? ? handle_game_end(loser) : next_turn(loser)
  end

  def handle_game_end(loser)
    reset_game
    { status: 'end_game', winner: loser.opponent }
  end

  def next_turn(loser)
    reset_game(false)
    { status: 'end_match', winner: loser.opponent }
  end
end
