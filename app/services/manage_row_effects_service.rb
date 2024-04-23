class ManageRowEffectsService
  def initialize(row, effect, is_active)
    @row = row
    @effect = effect
    @is_active = ActiveModel::Type::Boolean.new.cast(is_active)
  end

  def call
    effect == 'horn' ? activate_horn : activate_mardroeme
  end

  private

  attr_reader :row, :effect

  def activate_horn
    horn_card = row.cards.find_by(abilities: 'horn')

    if horn_card
      horn_card.points *= 2
      horn_card.save
    else
      row.cards.not_hero.each do |card|
        card.points *= 2
        card.save
      end
    end
    row.update(effect: 'horn')
  end

  def activate_mardroeme
    horn_coefficient = row.cards.where(abilities: 'horn').present? ? 2 : 1
    row.cards.where(abilities: 'berserker').each do |card|
      card.update(original_points: 14, points: 14 * horn_coefficient) if card.original_points != 14
    end
    row.cards.where(abilities: 'young_berserker').each do |card|
      card.update(original_points: 8, points: 8 * horn_coefficient) if card.original_points != 8
    end
    row.update(effect: 'mardroeme')
  end
end
