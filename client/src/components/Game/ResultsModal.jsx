import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'
import { useTranslation } from 'react-i18next'

function ResultsModal({ isOpen, result, notices, onClose }) {
  const { t } = useTranslation()

  const renderResultMessage = () => {
    switch (result.status) {
      case 'end_game':
        return t(
          result.winner.name === 'You'
            ? 'You won the game!'
            : 'Opponent won the game!',
        )
      case 'end_match':
        return t(
          result.winner.name === 'You'
            ? 'You won the match!'
            : 'Opponent won the match!',
        )
      case 'draw':
        return t('Draw!')
      default:
        return t('Game in progress...')
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ textAlign: 'center' }}>
      <DialogTitle>
        <Typography variant="h5">
          {t(result.status === 'end_game' ? 'Game Over' : 'End of Match')}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography variant="h4">{renderResultMessage()}</Typography>
      </DialogContent>
      <DialogContent>
        {notices.map((notice, index) => (
          <Typography sx={{ mb: '1rem' }} key={index}>
            {`${t(notice.name)} - ${t(notice.key)}`}
          </Typography>
        ))}
      </DialogContent>
    </Dialog>
  )
}

export default ResultsModal
