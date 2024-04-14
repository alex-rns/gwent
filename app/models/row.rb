class Row < ApplicationRecord
  belongs_to :player
  has_many :cards, -> { order(created_at: :asc) }

  enum row_type: { front: 'front', middle: 'middle', back: 'back' }
  enum effect: { horn: 'horn', mardroeme: 'mardroeme' }
end
