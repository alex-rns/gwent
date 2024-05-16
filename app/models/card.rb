class Card < ApplicationRecord
  belongs_to :row
  after_commit :recalculate_player_score

  enum abilities: {
    horn: 'horn',
    mardroeme: 'mardroeme',
    tight_bond: 'tight_bond',
    morale_boost: 'morale_boost',
    decoy: 'decoy',
    young_berserker: 'young_berserker',
    berserker: 'berserker'
  }

  scope :not_hero, -> { where(is_hero: false) }

  def cow?
    decoy_ability? && row.player.faction != 'skellige'
  end

  def kambi?
    decoy_ability? && row.player.faction == 'skellige'
  end

  private

  scope :with_tight_bond, ->(points) { where(original_points: points, abilities: :tight_bond) }

  def decoy_ability?
    abilities == 'decoy' && points != 8
  end

  def recalculate_player_score
    row.player.recalculate_score!
  end
end
