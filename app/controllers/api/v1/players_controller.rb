class Api::V1::PlayersController < ApplicationController
  def joined_game
    player = Player.find(params[:id])

    if player.update(player_params.merge(joined_game: true))
      render json: { status: 'success', message: 'Player joined the game.' }, status: :ok
    else
      render json: { status: 'error', message: 'Failed to join the game.' }, status: :unprocessable_entity
    end
  end

  private

  def player_params
    params.permit(:id, :faction, :leader)
  end
end
