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

  private

  def recalculate_player_score
    row.player.recalculate_score!
  end
end
