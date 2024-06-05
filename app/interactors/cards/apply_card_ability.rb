module Cards
  class ApplyCardAbilityContext < ActiveInteractor::Context::Base
    attributes :card, :row

    validates :card, :row, presence: true, on: :calling
  end

  class ApplyCardAbility < ActiveInteractor::Base
    def perform
      apply_ability
    end

    private

    def apply_ability

      case card.abilities
      when 'horn'
        apply_horn_ability
      when 'mardroeme'
        apply_mardroeme_ability
      when 'tight_bond'
        apply_tight_bond_ability
      when 'berserker'
        apply_berserker_ability
      when 'young_berserker'
        apply_young_berserker_ability
      else
        ##
      end
    end

    def apply_horn_ability
      card.update(points: card.points * 2) if card.abilities == 'horn' && row.effect == 'horn'

      return if row.effect == 'horn'

      row.cards.not_hero.each do |card|
        next if card.abilities == 'horn'
        card.points *= 2
        card.save
      end
    end

    def apply_mardroeme_ability
      horn_coefficient = row.effect == 'horn' || row.cards.where(abilities: 'horn').present? ? 2 : 1
      row.cards.where(abilities: 'berserker').update_all(original_points: 14, points: 14 * horn_coefficient)
      row.cards.where(abilities: 'young_berserker').update_all(original_points: 8, points: 8 * horn_coefficient)
    end

    def apply_tight_bond_ability
      row.cards.where(abilities: 'tight_bond').group_by(&:original_points).each do |_, cards|
        apply_points_for_tight_bond_group(cards)
      end
    end

    def apply_berserker_ability
      horn_coefficient = row.effect == 'horn' || row.cards.where(abilities: 'horn').present? ? 2 : 1
      if row.effect == 'mardroeme' || row.cards.where(abilities: 'mardroeme').present?
        card.update(original_points: 14, points: 14 * horn_coefficient) if card.original_points != 14
      end
    end

    def apply_young_berserker_ability
      horn_coefficient = row.effect == 'horn' || row.cards.where(abilities: 'horn').present? ? 2 : 1
      if row.effect == 'mardroeme' || row.cards.where(abilities: 'mardroeme').present?
        card.update(original_points: 8, points: 8 * horn_coefficient) if card.original_points != 8
      end
    end

    def apply_points_for_tight_bond_group(cards)
      return unless cards.count > 1

      new_points = calculate_tight_bond_points(cards)
      cards.each { |card| card.update!(points: new_points) }
    end

    def calculate_tight_bond_points(cards)
      horn = row.effect == 'horn' || row.cards.where(abilities: 'horn').present?
      base_points = cards.first.original_points * cards.count
      base_points *= 2 if horn
      base_points = adjust_points_for_weather(base_points, cards.count, horn) if row.weather
      base_points
    end

    def adjust_points_for_weather(points, count, horn)
      case count
      when 2 then horn ? 4 : 2
      when 3 then horn ? 6 : 3
      else points
      end
    end

    def card
      context.card
    end

    def row
      context.row
    end
  end
end
