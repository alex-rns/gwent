import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { CardActions, Button } from '@mui/material'
import { useGame } from '../../contexts/GameContext'
import { gameService } from '../../features/gameService.js'

function LeaderAbilityButton({ player }) {
  const { fetchGameState } = useGame()
  const { t } = useTranslation()
  const [isUsed, setIsUsed] = useState(player.leader_ability === 'used')
  const [isBlocked, setIsBlocked] = useState(
    player.leader_ability === 'blocked',
  )

  const handleApplyLeaderAbility = async () => {
    if (isUsed || isBlocked) {
      return
    }

    let status = 'not_used'
    if (!isUsed && !isBlocked) {
      status = 'used'
    } else if (isBlocked) {
      status = 'blocked'
    }

    await gameService.applyLeaderAbility(player.id, status)
    fetchGameState()

    if (status === 'used') {
      setIsUsed(true)
    } else if (status === 'blocked') {
      setIsBlocked(true)
    }
  }

  useEffect(() => {
    setIsUsed(player.leader_ability === 'used')
    setIsBlocked(player.leader_ability === 'blocked')
  }, [player])

  let buttonText = isBlocked
    ? t('Ability Blocked')
    : isUsed
      ? t('Ability Applied')
      : t('Apply Leader Ability')

  return (
    <CardActions sx={{ p: '0' }}>
      <Button
        variant={isUsed ? 'outlined' : 'contained'}
        size="small"
        fullWidth
        onClick={handleApplyLeaderAbility}
        sx={{ marginBottom: 'auto' }}
        color={isUsed ? 'secondary' : 'primary'}
      >
        {buttonText}
      </Button>
    </CardActions>
  )
}

export default LeaderAbilityButton
