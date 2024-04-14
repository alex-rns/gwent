import { GameProvider } from './contexts/GameContext.jsx'
import './App.css'
import Game from './components/Game/Game.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './config/theme/theme'
import './utils/i18n'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GameProvider>
        <Game />
      </GameProvider>
    </ThemeProvider>
  )
}

export default App
