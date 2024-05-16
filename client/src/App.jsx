import { GameProvider } from './contexts/GameContext.jsx'
import './App.css'
import Game from './components/Game/Game.jsx'
import { ThemeProvider } from '@mui/material'
import theme from './config/theme/theme'
import './utils/i18n'
import { SnackbarProvider } from './contexts/SnackbarContext.jsx'
import CustomSnackbar from './components/CustomSnackbar.jsx'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider>
        <GameProvider>
          <Game />
          <CustomSnackbar />
        </GameProvider>
      </SnackbarProvider>
    </ThemeProvider>
  )
}

export default App
