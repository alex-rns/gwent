import { useEffect, useState } from 'react'
import { gameService } from '../../features/gameService'
import { useGame } from '../../contexts/GameContext'
import Button from '@mui/material/Button'
import { IoSnowOutline } from 'react-icons/io5'
import { RiMoonFoggyFill } from 'react-icons/ri'
import { GiHeavyRain } from 'react-icons/gi'

const ICONS = {
  front: IoSnowOutline,
  middle: RiMoonFoggyFill,
  back: GiHeavyRain,
}

function WeatherControl({ rowType }) {
  const IconComponent = ICONS[rowType]
  const { game, fetchGameState } = useGame()
  const [isWeatherActive, setIsWeatherActive] = useState(false)

  const handleToggleWeather = async () => {
    await gameService.changeWeather(rowType)
    fetchGameState()
    setIsWeatherActive(!isWeatherActive)
  }

  useEffect(() => {
    const row = game.players
      .flatMap((player) => player.rows)
      .find((row) => row.row_type === rowType)
    setIsWeatherActive(row?.weather)
  }, [game, rowType])

  return (
    <Button
      variant="contained"
      color={isWeatherActive ? 'secondary' : 'primary'}
      onClick={handleToggleWeather}
      disabled={!game.players.every((player) => player.joined_game)}
    >
      <IconComponent className="large-icon" />
    </Button>
  )
}

export default WeatherControl
