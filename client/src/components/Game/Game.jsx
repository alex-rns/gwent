import { useGame } from '../../contexts/GameContext.jsx'
import SideBar from '../SideBar/SideBar.jsx'
import { Stack, Divider, Grid } from '@mui/material'
import Row from '../Row/Row.jsx'
import { gameService } from '../../features/gameService'
import './Game.css'
import { useTranslation } from 'react-i18next'

function Game() {
  const { game, loading, fetchGameState } = useGame()
  const { t } = useTranslation()

  const handleResetGame = async (closeModal) => {
    if (!window.confirm(t('resetGameConfirm'))) return

    await gameService.resetGame()
    fetchGameState()
    closeModal()
  }

  if (loading) return <div>Loading...</div>
  if (!game) return <div>Game data is not available</div>

  return (
    <Grid container spacing={2} className="game-container">
      {game && (
        <Grid item xs={3} style={{ padding: '2rem' }}>
          <SideBar players={game.players} handleResetGame={handleResetGame} />
        </Grid>
      )}

      <Grid item xs={9}>
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={2}
          className="game-table"
          divider={
            <Divider
              orientation="horizontal"
              flexItem
              sx={{ bgcolor: 'secondary.light' }}
            />
          }
        >
          {game.players
            .sort((a, b) => b.id - a.id)
            .map((player) => (
              <Stack
                key={player.id}
                direction={player.id === 2 ? 'column-reverse' : 'column'}
                spacing={2}
                style={{ height: '100%' }}
              >
                {player.joined_game &&
                  player.rows
                    .sort((a, b) => a.id - b.id)
                    .map((row) => <Row key={row.id} row={row} />)}
              </Stack>
            ))}
        </Stack>
      </Grid>
    </Grid>
  )
}

export default Game
