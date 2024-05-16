class Api::V1::GamesController < ApplicationController
  before_action :set_game, only: [:show, :reset_game, :end_the_match]

  def show
    render json: @game, include: { players: { include: { rows: { include: :cards } } } }
  end

  def reset_game
    @game.reset_game
    render json: { status: 'success', message: 'Game has been reset.' }, status: :ok
  end

  def end_the_match
    result = GameEndService.new(@game).call
    render json: result, status: :ok
  end

  private

  def set_game
    @game = Game.first
  end
end
