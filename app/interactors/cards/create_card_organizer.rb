module Cards
  class CreateCardContext < ActiveInteractor::Context::Base
    attributes :card_params, :row

    validates :card_params, :row, presence: true, on: :calling
  end

  class CreateCardOrganizer < TransactionOrganizer
    organize do
      add Cards::BuildCard
      add Cards::ApplyWeatherEffect, if: -> { context.row.weather.present? && !context.card_params[:is_hero] }
      add Cards::ApplyRowEffect, if: -> { !context.card_params[:is_hero] }
      add Cards::ApplyCardAbility, if: -> { context.card_params[:abilities].present? }
      add Cards::ApplyMoraleBoostAbility

      add Cards::SaveCard
    end
  end
end
