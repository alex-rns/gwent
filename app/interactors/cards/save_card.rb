module Cards
  class SaveCardContext < ActiveInteractor::Context::Base
    attributes :card, :row

    validates :card, presence: true, on: :calling
  end

  class SaveCard < ActiveInteractor::Base

    def perform
      if card.save!
        # ManageWeatherEffectsService.new(row.row_type).call
        # ManageWeatherEffectsService.new(row.row_type).call
        context.card = card
      else
        context.fail!(card.errors)
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
