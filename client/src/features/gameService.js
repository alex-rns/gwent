import { API_URL } from '../constants'

const fetchAPI = async (url, options) => {
  const response = await fetch(url, {
    ...options,
    headers: { 'Content-Type': 'application/json' },
  })
  return await response.json()
}

export const gameService = {
  joinGame: (playerId, faction, leader) =>
    fetchAPI(`${API_URL}/api/v1/players/${playerId}/joined_game`, {
      method: 'POST',
      body: JSON.stringify({ faction, leader }),
    }),
  resetGame: () =>
    fetchAPI(`${API_URL}/api/v1/games/1/reset_game`, {
      method: 'POST',
    }),
  changeWeather: (rowType) =>
    fetchAPI(`${API_URL}/api/v1/rows/set_weather`, {
      method: 'POST',
      body: JSON.stringify({ row_type: rowType }),
    }),
  changeRowEffect: (rowId, effect) =>
    fetchAPI(`${API_URL}/api/v1/rows/${rowId}/set_effect`, {
      method: 'POST',
      body: JSON.stringify({ effect }),
    }),
  createCard: (cardData) => {
    const { rowId, isHero, points, abilities } = cardData
    return fetchAPI(`${API_URL}/api/v1/cards`, {
      method: 'POST',
      body: JSON.stringify({
        row_id: rowId,
        is_hero: isHero,
        points,
        abilities,
      }),
    })
  },
  updateCard: (cardData) => {
    const { cardId, rowId, isHero, points, abilities } = cardData
    return fetchAPI(`${API_URL}/api/v1/cards/${cardId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        row_id: rowId,
        is_hero: isHero,
        points,
        abilities,
      }),
    })
  },
  deleteCard: (cardId) =>
    fetchAPI(`${API_URL}/api/v1/cards/${cardId}`, {
      method: 'DELETE',
    }),
  applyLeaderAbility: (playerId, status) =>
    fetchAPI(
      `${API_URL}/api/v1/players/${playerId}/change_leader_ability_status`,
      {
        method: 'POST',
        body: JSON.stringify({ leader_ability: status }),
      },
    ),
  endTheMatch: () =>
    fetchAPI(`${API_URL}/api/v1/games/1/end_the_match`, {
      method: 'POST',
    }),
}
