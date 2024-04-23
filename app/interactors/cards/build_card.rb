module Cards
  class BuildCardContext < ActiveInteractor::Context::Base
    attributes :card_params, :row

    validates :card_params, :row, presence: true, on: :calling
  end

  class BuildCard < ActiveInteractor::Base
    def perform
      context.card = row.cards.create(card_params.merge(original_points: card_params[:points]))
    end

    private

    def card_params
      context.card_params
    end

    def row
      context.row
    end
  end
end

