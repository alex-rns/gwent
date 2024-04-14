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
      row.update(weather: !row.weather)
    end
  end

  def activate_weather_effect(row)
    row.cards.not_hero.each do |card|
      horn_coeficient = row.effect == 'horn' ? 2 : 1
      # TODO: need to add morale boost effect coeficient and tight_bond effect coeficient
      card.update(original_points: card.points / horn_coeficient, points: horn_coeficient)
    end
  end

  def deactivate_weather_effect(row)
    row.cards.not_hero.each do |card|
      if card.row.effect == 'horn'
        if card.original_points.present?
          card.update(points: card.original_points * 2)
        else
          card.update(points: card.points)
        end

      else
        card.update(points: card.original_points)
      end
    end
  end
end
