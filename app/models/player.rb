class Player < ApplicationRecord
  belongs_to :game
  has_many :rows
  has_many :cards, through: :rows

  FACTION_LEADERS = {
    northern_realms: %w[king_of_temeria the_siegemaster the_steel_forged son_of_medell lord_commander_of_the_north],
    nilfgaard: %w[emperor_of_nilfgaard his_imperial_majesty invader_of_the_north the_relentless the_white_flame]
    # scoia_tael: ['Filavandrel', 'Francesca Findabair', 'Brouver Hoog', 'Eithné', 'Gabor Zigrin'],
    # monsters: ['Eredin', 'Dagon', 'Unseen Elder', 'Woodland Spirit', 'Caranthir'],
    # skellige: ['Crach an Craite', 'Eist Tuirseach', 'Harald the Cripple', 'Bran Tuirseach', 'Svanrige Tuirseach']
  }.freeze

  enum faction: FACTION_LEADERS.keys.index_by(&:to_s)

  def recalculate_score!
    new_score = cards.sum(:points)
    update(score: new_score)
  end
end
