class GameChannel < ApplicationCable::Channel
  def subscribed
    # stream_from "game_channel"
    # transmit(game_data(Game.first))
  end
  #
  # private
  #
  # def game_data(game)
  #   {
  #     game: {
  #       id: game.id,
  #       players: game.players.as_json(include: { rows: { include: :cards } })
  #     }
  #   }
  # end
end
