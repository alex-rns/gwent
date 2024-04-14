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
    row.cards.not_hero.each do |card|
      card.points *= 2
      card.save
    end

    row.update(effect: 'horn')
  end

  def activate_mardroeme
    row.update(effect: 'mardroeme')
  end
end
