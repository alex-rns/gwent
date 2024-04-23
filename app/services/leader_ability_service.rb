class LeaderAbilityService
  def initialize(player)
    @player = player
  end

  def call
    case player.leader
    when 'king_of_temeria'
      apply_king_of_temeria
    when 'archmage'
      apply_archmage
    else
      true
    end
  end

  private

  attr_reader :player

  def apply_king_of_temeria
    player.opponent.update(leader_ability: "blocked")
  end
end
