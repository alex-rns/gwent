import Button from '@mui/material/Button'
import { useState } from 'react'
import { Stack } from '@mui/material'
import Item from '@mui/material/Grid'
import Muicard from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import WeatherControl from './WeatherControl.jsx'
import PlayerLives from './PlayerLives.jsx'
import './SideBar.css'
import { useTranslation } from 'react-i18next'
import SettingsModal from './SettingsModal.jsx'
import FactionSelector from './FactionSelector.jsx'
import { gameService } from '../../features/gameService.js'
import { useGame } from '../../contexts/GameContext.jsx'

function SideBar({ players, handleResetGame }) {
  const { setGame } = useGame()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleCloseModal = () => setIsModalOpen(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const handleJoinGame = async (playerId, faction, leader) => {
    await gameService.joinGame(playerId, faction, leader)
    const updatedGame = await gameService.fetchGameState()
    setGame(updatedGame)
  }

  return (
    <>
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={2}
        style={{ height: '100%' }}
      >
        <Item>
          <Muicard className="sidebar-card">
            <CardHeader title={players[0].name} />
            <PlayerLives player={players[0]} />

            {players[0].joined_game && (
              <Typography variant="h2">{players[0].score}</Typography>
            )}

            {!players[0].joined_game && (
              <FactionSelector
                player={players[0]}
                onSelectFactionAndLeader={handleJoinGame}
              />
            )}
          </Muicard>
        </Item>

        <Stack direction="row" justifyContent="center" spacing={2}>
          <WeatherControl rowType="front" />
          <WeatherControl rowType="middle" />
          <WeatherControl rowType="back" />
        </Stack>

        <Item>
          <Muicard className="sidebar-card">
            <CardHeader title={players[1].name} />
            <PlayerLives player={players[1]} />
            {players[1].joined_game && (
              <Typography variant="h2">{players[1].score}</Typography>
            )}

            {!players[1].joined_game && (
              <FactionSelector
                player={players[1]}
                onSelectFactionAndLeader={handleJoinGame}
              />
            )}
          </Muicard>
        </Item>
      </Stack>

      <Button variant="contained" onClick={handleOpenModal}>
        {t('Settings')}
      </Button>

      {isModalOpen && (
        <SettingsModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          changeLanguage={changeLanguage}
          handleResetGame={() => handleResetGame(handleCloseModal)}
        />
      )}
    </>
  )
}

export default SideBar
