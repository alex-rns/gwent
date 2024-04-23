class Game < ApplicationRecord
  has_many :players
  belongs_to :current_player, class_name: 'Player', optional: true

  def reset_game
    players.each do |player|
      player.update!(joined_game: false, faction: nil, leader: nil, leader_ability: 'not_used', lives: 2)
      player.rows.each do |row|
        row.update!(weather: false, effect: nil)
        row.cards.destroy_all
      end
    end
  end

  def end_of_turn
    # need to compare scores and determine winner, decrease 1 life from loser if life > 0
  end
end
