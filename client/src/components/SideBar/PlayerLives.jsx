import { Stack } from '@mui/material'
import { GiFireGem } from 'react-icons/gi'

function PlayerLives({ player }) {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center">
      {Array.from({ length: player.lives }, (_, index) => (
        <GiFireGem key={index} className="large-icon life-icon" />
      ))}
    </Stack>
  )
}

export default PlayerLives
