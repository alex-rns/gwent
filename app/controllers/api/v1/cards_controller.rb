class Api::V1::CardsController < ApplicationController
  before_action :set_card, only: %i[update destroy]
  before_action :set_row, only: %i[create]

  def create
    @card = @row.cards.create!(card_params)

    if @card.save!
      render json: { status: 'success' }, status: :ok
    else
      render json: { status: 'error' }, status: :unprocessable_entity
    end
  end

  def update
    if @card.update(card_params)
      render json: { status: 'success' }, status: :ok
    else
      render json: { status: 'error' }, status: :unprocessable_entity
    end
  end

  def destroy
    @card.destroy!
    render json: { status: 'success' }, status: :ok
  end

  private

  def set_card
    @card = Card.find(params[:id])
  end

  def set_row
    @row = Row.find(params[:row_id])
  end

  def card_params
    params.require(:card).permit(:points, :abilities, :is_hero, :row_id)
  end
end
