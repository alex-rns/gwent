module Cards
  class ApplyMoraleBoostAbilityContext < ActiveInteractor::Context::Base
    attributes :card, :row

    validates :card, presence: true, on: :calling
  end

  class ApplyMoraleBoostAbility < ActiveInteractor::Base
    def perform
      apply_ability
    end

    private

    def apply_ability
      if card&.abilities&.include?('morale_boost')
        row.cards.where.not(id: card.id).find_each do |other_card|
          next if other_card.abilities&.include?('tight_bond')
          other_card.update(points: other_card.points + 1)
        end

        existing_morale_boost_cards = row.cards.where(abilities: 'morale_boost').where.not(id: card.id)

        if existing_morale_boost_cards.exists? || card&.abilities&.include?('morale_boost')
          boost_amount = existing_morale_boost_cards.count
          if row.cards.where(abilities: 'tight_bond').exists?
            row.cards.where(abilities: 'tight_bond').each do |tight_bond_card|
              tight_bond_card.update(points: tight_bond_card.points + 1)
            end
          end
          card.update(points: card.reload.points + boost_amount)
        end
      elsif card&.abilities&.include?('tight_bond')
        existing_morale_boost_cards = row.cards.where(abilities: 'morale_boost').count
        card.update(points: card.reload.points + existing_morale_boost_cards)
        if row.cards.where(abilities: 'tight_bond').exists?
          row.cards.where(abilities: 'tight_bond').each do |tight_bond_card|
            next if tight_bond_card.id == card.id
            tight_bond_card.update(points: tight_bond_card.points + existing_morale_boost_cards)
          end
        end
      else
        if row.cards.where(abilities: 'morale_boost').exists?
          existing_morale_boost_cards = row.cards.where(abilities: 'morale_boost').count
          card.update(points: card.points + existing_morale_boost_cards)
        end
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
