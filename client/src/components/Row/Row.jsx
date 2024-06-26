import { useState } from 'react'
import Card from '../Card/Card.jsx'
import './Row.css'
import RowEffects from './RowEffects.jsx'
import CardModal from '../Card/CardModal.jsx'
import Button from '@mui/material/Button'
import Slide from '@mui/material/Slide'

function Row({ row }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)

  const handleOpenModalForNewCard = () => {
    setSelectedCard(null)
    setIsModalOpen(true)
  }

  const handleOpenModalForEdit = (card) => {
    setSelectedCard(card)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => setIsModalOpen(false)

  return (
    <div
      className={`row ${row.weather ? `row-weather-on row-weather-${row.row_type}` : ''}`}
    >
      <RowEffects rowId={row.id} />
      {row.cards &&
        row.cards.map((card) => (
          <Slide direction="up" in={true} key={card.id}>
            <div>
              <Card card={card} onEdit={handleOpenModalForEdit} />
            </div>
          </Slide>
        ))}
      <Button
        variant="contained"
        color="primary"
        onClick={handleOpenModalForNewCard}
      >
        +
      </Button>
      {isModalOpen && (
        <CardModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          rowId={row.id}
          cardData={selectedCard}
        />
      )}
    </div>
  )
}
export default Row
