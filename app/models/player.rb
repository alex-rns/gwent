class Player < ApplicationRecord
  belongs_to :game
  has_many :rows
  has_many :cards, through: :rows

  enum leader_ability: { unused: 'unused', used: 'used', blocked: 'blocked' }

  def recalculate_score!
    new_score = cards.sum(:points)
    update(score: new_score)
  end

  def opponent
    game.players.where.not(id: id).first
  end

  def reset_state!(fully)
    update!(joined_game: false, faction: nil, leader: nil, leader_ability: 'unused', lives: 2) if fully
    rows.each do |row|
      row.update!(weather: false, effect: nil)
      row.cards.each do |card|
        decoy_points = if card.kambi?
                         11
                        elsif card.cow?
                          8
                        else
                          card.original_points
                        end
        ((card.kambi? || card.cow?) && !fully) ? card.update!(points: decoy_points,  original_points: decoy_points, is_hero: card.kambi?) : card.destroy
      end
    end
  end

  def zero_lives?
    lives.zero?
  end

  def alive?
    lives.positive?
  end
end
