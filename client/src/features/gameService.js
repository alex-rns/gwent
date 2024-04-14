import { API_URL } from '../constants'

const fetchAPI = async (url, options) => {
  const response = await fetch(url, options)
  return await response.json()
}

export const gameService = {
  joinGame: (playerId, faction, leader) =>
    fetchAPI(`${API_URL}/api/v1/players/${playerId}/joined_game`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ faction, leader }),
    }),
  resetGame: (gameId) =>
    fetchAPI(`${API_URL}/api/v1/games/${gameId}/reset_game`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }),
  fetchGameState: () =>
    fetchAPI(`${API_URL}/api/v1/games/current`, {
      headers: { 'Content-Type': 'application/json' },
    }),
  changeWeather: (rowType) =>
    fetchAPI(`${API_URL}/api/v1/rows/set_weather`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ row_type: rowType }),
    }),
  changeRowEffect: (rowId, effect) =>
    fetchAPI(`${API_URL}/api/v1/rows/${rowId}/set_effect`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ effect }),
    }),
  createCard: async (cardData) => {
    const { rowId, isHero, points, abilities } = cardData
    return fetchAPI(`${API_URL}/api/v1/cards`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        row_id: rowId,
        is_hero: isHero,
        points,
        abilities,
      }),
    })
  },
  updateCard: async (cardData) => {
    const { cardId, rowId, isHero, points, abilities } = cardData
    return fetchAPI(`${API_URL}/api/v1/cards/${cardId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        row_id: rowId,
        is_hero: isHero,
        points,
        abilities,
      }),
    })
  },
  deleteCard: async (cardId) =>
    fetchAPI(`${API_URL}/api/v1/cards/${cardId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    }),
  useLeaderAbility: async () =>
    fetchAPI(`${API_URL}/api/v1/players/use_leader_ability`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    }),
}
