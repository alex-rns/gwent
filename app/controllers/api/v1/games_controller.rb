class Api::V1::GamesController < ApplicationController
  def show
    game = Game.first
    if game
      render json: game, include: { players: { include: { rows: { include: :cards } } } }
    else
      render json: { error: 'Game not found' }, status: :not_found
    end
  end

  def reset_game
    game = Game.first
    if game.reset_game
      render json: { message: 'Game has been reset.' }, status: :ok
    else
      render json: { error: 'Failed to reset game.' }, status: :unprocessable_entity
    end
  end
end
