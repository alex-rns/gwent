class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: [:show, :reset_game, :end_the_match]

  def show
    if @game
      render json: @game, include: { players: { include: { rows: { include: :cards } } } }
    else
      render json: { error: 'Game not found' }, status: :not_found
    end
  end

  def reset_game
    if @game.reset_game
      render json: { message: 'Game has been reset.' }, status: :ok
    else
      render json: { error: 'Failed to reset game.' }, status: :unprocessable_entity
    end
  end

  def end_the_match
    result = @game.end_of_turn
    render json: result, status: :ok
  end

  private

  def set_game
    @game = Game.first
  end
end
