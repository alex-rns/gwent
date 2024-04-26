import { Card as Muicard } from '@mui/material'
import './Card.css'
import sun from '../../assets/SunFrame3.webp'
import { ICONS } from '../../utils/icons'

function Card({ card, onEdit }) {
  const IconComponent = ICONS[card.abilities]

  return (
    <Muicard
      sx={{ boxShadow: 10 }}
      className="game-card"
      onClick={() => onEdit(card)}
    >
      <div className="card-points-container">
        {card.is_hero && <img src={sun} className="sun-frame" />}
        <div className="card-points">{card.points}</div>
      </div>
      {card.abilities && <IconComponent className="large-icon" />}
    </Muicard>
  )
}

export default Card
