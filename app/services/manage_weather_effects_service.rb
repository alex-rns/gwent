class ManageWeatherEffectsService
  def initialize(row_type)
    @row_type = row_type
  end

  def call
    toggle_weather_status
  end

  private

  attr_reader :row_type

  def toggle_weather_status
    Row.where(row_type:).each do |row|
      row.weather ? deactivate_weather_effect(row) : activate_weather_effect(row)
      row.update!(weather: !row.weather)
    end
  end

  def activate_weather_effect(row)
    card_effect = row.cards.any? { |card| card.abilities == 'horn' }
    horn_coefficient = row.effect == 'horn' || card_effect ? 2 : 1
    bran_king = row.player.leader == 'bran_king'
    horn_coefficient = 0.5 if bran_king

    tight_bond_points = calculate_tight_bond_points(row)

    row.cards.not_hero.each do |card|
      if card&.abilities&.include?('tight_bond')
        card.update(points: tight_bond_points[card.original_points] * horn_coefficient)
      elsif card.abilities == 'horn'
        if card.original_points == 2
          card.update(points: row.effect == 'horn' ? 2 : 1)
        else
          bran_king ? card.update(points: card.points / 2) :  card.update(points: 1)
        end
      else
        bran_king ? card.update(points: (card.points * horn_coefficient)) :  card.update(points: 1)
      end
    end
    row.reload
    reapply_morale_boost(row)
  end

  def deactivate_weather_effect(row)
    card_effect = row.cards.any? { |card| card.abilities == 'horn' }
    horn_coefficient = row.effect == 'horn' || card_effect ? 2 : 1

    tight_bond_groups = row.cards.not_hero.where(abilities: 'tight_bond').group_by(&:original_points).transform_values(&:count)

    row.cards.not_hero.each do |card|
      if card&.abilities&.include?('tight_bond')
        new_points = card.original_points * tight_bond_groups[card.original_points] * horn_coefficient
        card.update(points: new_points)
      elsif card.abilities == 'horn'
        if card.original_points == 2
          card.update(points: row.effect == 'horn' ? 4 : 2)
        else
          card.update(points: 1)
        end
      else
        new_points = card.original_points ? card.original_points * horn_coefficient : card.points
        card.update!(points: new_points)
      end
    end
    row.reload
    reapply_morale_boost(row)
  end

  def calculate_tight_bond_points(row)
    tight_bond_points = {}
    row.cards.not_hero.where(abilities: 'tight_bond').group_by(&:original_points).each do |original_points, cards|
      count = cards.count
      tight_bond_points[original_points] = (count == 2 ? 2 : (count == 3 ? 3 : 1))
    end
    tight_bond_points
  end

  def reapply_morale_boost(row)
    existing_morale_boost_cards = row.cards.where(abilities: 'morale_boost').count
    row.cards.not_hero.each do |card|
      if card&.abilities&.include?('morale_boost')
        next if existing_morale_boost_cards == 1
        # when deactivate weather
        card.update(points: existing_morale_boost_cards) unless row.weather

        # when deactivate weather
        card.update(points: card.points + existing_morale_boost_cards -1 ) if row.weather
      else

        card.update(points: card.points + existing_morale_boost_cards)
      end
    end
  end
end
