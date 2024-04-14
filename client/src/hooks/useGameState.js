// Not used now
// Because I switched to useContext for global state management

import { useState, useEffect } from 'react'
import { API_URL } from '../constants.js'

const useGameState = () => {
  const [game, setGame] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGameState = async () => {
      try {
        const response = await fetch(`${API_URL}/api/v1/games/current`)
        if (!response.ok) throw new Error('Failed to fetch game state.')
        const data = await response.json()
        setGame(data)
      } catch (error) {
        console.error('Failed to fetch game state:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchGameState()
  }, [])

  return { game, loading, setGame, setLoading }
}

export default useGameState
