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
      row.cards.destroy_all
    end
  end

  def zero_lives?
    lives.zero?
  end

  def alive?
    lives.positive?
  end
end
