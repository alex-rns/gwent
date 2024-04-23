import { useState } from 'react'
import Item from '@mui/material/Grid'
import WeatherControl from './WeatherControl.jsx'
import PlayerLives from './PlayerLives.jsx'
import './SideBar.css'
import { useTranslation } from 'react-i18next'
import SettingsModal from './SettingsModal.jsx'
import FactionSelector from './FactionSelector.jsx'
import { gameService } from '../../features/gameService.js'
import { useGame } from '../../contexts/GameContext.jsx'
import LeaderAbilityButton from './LeaderAbilityButton.jsx'
import {
  Card as Muicard,
  Typography,
  Button,
  Stack,
  CardHeader,
} from '@mui/material'

function SideBar({ players, handleResetGame }) {
  const { fetchGameState } = useGame()
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
    fetchGameState()
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
            <CardHeader title={t(players[0].name)} />
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
          {players[0].joined_game && (
            <LeaderAbilityButton player={players[0]} />
          )}
        </Item>

        <Stack direction="row" justifyContent="center" spacing={2}>
          <WeatherControl rowType="front" />
          <WeatherControl rowType="middle" />
          <WeatherControl rowType="back" />
        </Stack>

        <Item>
          <Muicard className="sidebar-card">
            <CardHeader title={t(players[1].name)} />
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
          {players[1].joined_game && (
            <LeaderAbilityButton player={players[1]} />
          )}
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
