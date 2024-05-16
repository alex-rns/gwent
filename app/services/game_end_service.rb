class GameEndService
  def initialize(game)
    @game = game
    @was_draw = game.draw?
  end

  def call
    result = @game.end_of_turn
    { result: result, notices: generate_notices }
  end

  private

  def generate_notices
    @game.players.map do |player|
      notice_key = notice_for_faction(player)
      unless notice_key.empty?
        { name: player.name, key: notice_key }
      end
    end.compact
  end

  def notice_for_faction(player)
    case player.faction
    when 'monsters'
      'factionNoticesMonsters'
    when 'nilfgaard'
      @was_draw ? 'factionNoticesNilfgaard' : ''
    when 'northern_realms'
      player == @game.round_winner ? 'factionNoticesNorthernRealms' : ''
    when 'scoiatael'
      'factionNoticesScoiatael'
    when 'skellige'
      !@was_draw && one_point_left? ? 'factionNoticesSkellige' : ''
    else
      ''
    end
  end

  def one_point_left?
    @game.players.all? { |player| player.lives == 1 }
  end
end
