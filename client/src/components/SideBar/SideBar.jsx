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
import { useSnackbar } from '../../contexts/SnackbarContext.jsx'
import {
  Card as Muicard,
  Typography,
  Button,
  Stack,
  CardHeader,
} from '@mui/material'
import { humanize } from '../../utils/stringUtils.js'
import FactionIcon from './FactionIcon.jsx'
import ResultsModal from '../Game/ResultsModal.jsx'

function SideBar({ players, handleResetGame }) {
  const { fetchGameState } = useGame()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleCloseModal = () => setIsModalOpen(false)

  const [isResultsModalOpen, setIsResultsModalOpen] = useState(false)
  const [result, setResult] = useState()
  const { showSnackbar } = useSnackbar()

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const { t, i18n } = useTranslation()

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  const handleJoinGame = async (playerId, faction, leader) => {
    await gameService.joinGame(playerId, faction, leader).then((response) => {
      fetchGameState()
      showSnackbar(response.message, response.status)
    })
  }

  const handleEndTheMatch = async () => {
    if (!window.confirm(t('endTheMatch'))) return

    const response = await gameService.endTheMatch()
    if (response) {
      setResult(response)
      setIsResultsModalOpen(true)
    }
    fetchGameState()
  }

  return (
    <>
      {isResultsModalOpen && (
        <ResultsModal
          isOpen={isResultsModalOpen}
          onClose={() => setIsResultsModalOpen(false)}
          result={result.result}
          notices={result.notices}
        />
      )}
      <Stack
        direction="column"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={2}
        style={{ height: '100%' }}
      >
        <Item>
          <Muicard
            sx={{ paddingBottom: 1, position: 'relative' }}
            className="sidebar-card"
          >
            {players[0].joined_game && (
              <Typography variant="caption">
                {t(humanize(players[0].faction))}
              </Typography>
            )}
            {players[0].joined_game && (
              <FactionIcon faction={players[0].faction} asBackground="true" />
            )}
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
            {players[0].joined_game && (
              <Typography variant="caption">
                {t(humanize(players[0].leader))}
              </Typography>
            )}
          </Muicard>
          {players[0].joined_game && (
            <LeaderAbilityButton player={players[0]} />
          )}
        </Item>
        <Item>
          <Stack
            direction="row"
            justifyContent="center"
            spacing={2}
            sx={{ mb: '1rem' }}
          >
            <WeatherControl rowType="front" />
            <WeatherControl rowType="middle" />
            <WeatherControl rowType="back" />
          </Stack>
          <Stack>
            <Button
              variant="contained"
              onClick={handleEndTheMatch}
              disabled={!players.every((player) => player.joined_game)}
            >
              {t('End the match')}
            </Button>
          </Stack>
        </Item>

        <Item>
          <Muicard
            sx={{ paddingBottom: 1, position: 'relative' }}
            className="sidebar-card"
          >
            {players[1].joined_game && (
              <Typography variant="caption">
                {t(humanize(players[1].faction))}
              </Typography>
            )}
            {players[1].joined_game && (
              <FactionIcon faction={players[1].faction} asBackground="true" />
            )}
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
            {players[0].joined_game && (
              <Typography variant="caption">
                {t(humanize(players[1].leader))}
              </Typography>
            )}
          </Muicard>
          {players[1].joined_game && (
            <LeaderAbilityButton player={players[1]} />
          )}
        </Item>
      </Stack>
      <Stack>
        <Button
          sx={{ textAlign: 'center' }}
          variant="contained"
          onClick={handleOpenModal}
        >
          {t('Settings')}
        </Button>
      </Stack>

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
