import { useState, useEffect } from 'react'
import { gameService } from '../../features/gameService'
import { useGame } from '../../contexts/GameContext.jsx'
import { ICONS } from '../../utils/icons'
import sun from '../../assets/SunFrame3.webp'
import { humanize } from '../../utils/stringUtils'
import { useTranslation } from 'react-i18next'
import './CardModal.css'
import {
  Stack,
  Box,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Tooltip,
} from '@mui/material'

function CardModal({ isOpen, onClose, rowId, cardData }) {
  const { fetchGameState } = useGame()
  const [selectedPoints, setSelectedPoints] = useState(null)
  const [selectedAbility, setSelectedAbility] = useState('')
  const [isHero, setIsHero] = useState(false)
  const { t } = useTranslation()

  const handleSubmit = async () => {
    if (cardData) {
      await gameService.updateCard({
        cardId: cardData.id,
        rowId,
        points: selectedPoints,
        abilities: selectedAbility,
        isHero: isHero,
      })
    } else {
      await gameService.createCard({
        rowId,
        points: selectedPoints,
        abilities: selectedAbility,
        isHero: isHero,
      })
    }
    fetchGameState()
    onClose()
  }

  const handleDelete = async () => {
    await gameService.deleteCard(cardData.id)
    fetchGameState()
    onClose()
  }

  const modalTitle = cardData ? t('Edit Card') : t('Create a New Card')

  useEffect(() => {
    if (cardData && cardData.points) {
      setSelectedPoints(cardData.points)
      setSelectedAbility(cardData.abilities)
      setIsHero(cardData.is_hero)
    } else {
      setSelectedPoints(null)
      setSelectedAbility('')
      setIsHero(false)
    }
  }, [cardData])

  return (
    <Dialog
      fullWidth
      maxWidth="md"
      open={isOpen}
      onClose={onClose}
      aria-labelledby="card-modal-title"
    >
      <DialogTitle sx={{ textAlign: 'center' }} id="card-modal-title">
        {modalTitle}
      </DialogTitle>
      <DialogContent>
        <Stack direction="row" justifyContent="center" flexWrap="wrap">
          {Array.from({ length: 16 }, (_, i) => (
            <Button
              key={i}
              variant={selectedPoints === i ? 'contained' : 'outlined'}
              onClick={() => setSelectedPoints(i)}
              sx={{ m: 0.5, minWidth: '55px' }}
            >
              {i}
            </Button>
          ))}
        </Stack>
        <Box
          sx={{
            mt: 10,
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Tooltip title={t('Hero Card')}>
            <Button
              className={'ability-card-button'}
              variant={isHero === true ? 'contained' : 'outlined'}
              onClick={() => setIsHero(isHero !== true)}
            >
              <img
                src={sun}
                className="hero-button-img"
                alt="hero-button-img"
              />
            </Button>
          </Tooltip>

          {Object.entries(ICONS).map(([ability, Icon]) => (
            <Tooltip key={ability} title={t(humanize(ability))}>
              <Button
                key={ability}
                variant={selectedAbility === ability ? 'contained' : 'outlined'}
                onClick={() =>
                  setSelectedAbility(selectedAbility === ability ? '' : ability)
                }
                className={'ability-card-button'}
              >
                <Icon className="svg-icons" />
              </Button>
            </Tooltip>
          ))}
        </Box>
      </DialogContent>
      <DialogActions
        sx={{ justifyContent: cardData ? 'space-between' : 'flex-end' }}
      >
        {cardData && (
          <Button onClick={handleDelete} color="error">
            {t('Delete Card')}
          </Button>
        )}
        <div>
          <Button onClick={onClose}>{t('Cancel')}</Button>
          <Button
            onClick={handleSubmit}
            disabled={selectedPoints === null}
            variant="contained"
          >
            {cardData ? t('Update Card') : t('Create Card')}
          </Button>
        </div>
      </DialogActions>
    </Dialog>
  )
}

export default CardModal
