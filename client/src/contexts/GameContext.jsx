import { createContext, useContext, useState, useEffect } from 'react'
import { API_URL } from '../constants'

const GameContext = createContext()

export const useGame = () => useContext(GameContext)

export const GameProvider = ({ children }) => {
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  function fetchGameState() {
    fetch(`${API_URL}/api/v1/games/current`)
      .then((response) => {
        if (!response.ok) throw new Error('Failed to fetch game state.')
        return response.json()
      })
      .then((data) => {
        setGame(data)
      })
      .catch((error) => {
        console.error('Failed to fetch game state:', error)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchGameState()
  }, [])

  return (
    <GameContext.Provider value={{ game, loading, setGame, fetchGameState }}>
      {children}
    </GameContext.Provider>
  )
}
