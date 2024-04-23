module Cards
  class ApplyWeatherEffectContext < ActiveInteractor::Context::Base
    attributes :card, :row
  end

  class ApplyWeatherEffect < ActiveInteractor::Base
    def perform
      apply_effects_based_on_weather
    end

    private

    def apply_effects_based_on_weather
      return unless row.weather

      apply_tight_bond_weather_effect if card.abilities == 'tight_bond'
      apply_general_weather_effect
    end

    def apply_tight_bond_weather_effect
      row.cards.not_hero.where(abilities: 'tight_bond').group_by(&:original_points).each do |_, cards|
        point_value = calculate_weather_points_for_tight_bond(cards)
        cards.each { |card| card.update(points: point_value) }
      end
    end

    def apply_general_weather_effect
      return if card.abilities == 'tight_bond'

      card.update(points: 1)
    end

    def calculate_weather_points_for_tight_bond(cards)
      case cards.count
      when 2 then 2
      when 3 then 3
      else 1
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
