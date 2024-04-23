module Cards
  class ApplyRowEffectContext < ActiveInteractor::Context::Base
    attributes :card, :row

    validates :card, :row, presence: true, on: :calling
  end

  class ApplyRowEffect < ActiveInteractor::Base
    def perform
      apply_effects_based_on_row
      apply_card_ability_on_row
    end

    def apply_effects_based_on_row
      case row.effect
      when 'horn'
        apply_horn_effect
      when 'mardroeme'
        apply_mardroeme_effect
      else
        #
      end
    end

    def apply_card_ability_on_row
      return if row.effect == 'horn'

      if row.cards.where(abilities: 'horn').present?
        apply_horn_effect
      end
    end

    def apply_horn_effect
      if row.weather
        card.update(points: 2)
      else
        return if card.abilities == 'horn'
        card.update(points: card.points * 2)
      end
    end

    def apply_mardroeme_effect
      horn_coefficient = row.effect == 'horn' || row.cards.where(abilities: 'horn').present? ? 2 : 1
      row.cards.where(abilities: 'berserker').each do |card|
        card.update(original_points: 14, points: 14 * horn_coefficient) if card.original_points != 14
      end
      row.cards.where(abilities: 'young_berserker').each do |card|
        card.update(original_points: 8, points: 8 * horn_coefficient) if card.original_points != 8
      end
    end

    private

    def card
      context.card
    end

    def row
      context.row
    end
  end
end
