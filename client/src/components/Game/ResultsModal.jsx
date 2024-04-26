import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material'

function ResultsModal({ isOpen, result, onClose }) {
  const renderResultMessage = () => {
    switch (result.status) {
      case 'end_game':
        return `${result.winner.name} won the game!`
      case 'end_match':
        return `${result.winner.name} won the match!`
      case 'draw':
        return 'Draw!'
      default:
        return 'Game in progress...'
    }
  }

  return (
    <Dialog open={isOpen} onClose={onClose} sx={{ textAlign: 'center' }}>
      <DialogTitle>
        <Typography variant="h5">
          {result.status === 'end_game' ? 'Game Over' : 'End of Match'}
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Typography>{renderResultMessage()}</Typography>
      </DialogContent>
    </Dialog>
  )
}

export default ResultsModal
