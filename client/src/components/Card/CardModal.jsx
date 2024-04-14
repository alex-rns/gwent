import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import { gameService } from '../../features/gameService';
import { useGame } from "../../contexts/GameContext.jsx";
import { ICONS } from '../../utils/icons'
import sun from '../../assets/SunFrame3.webp'
import Tooltip from '@mui/material/Tooltip';
import { humanize } from '../../utils/stringUtils';

function CardModal({ isOpen, onClose, rowId, cardData }) {
  const { setGame } = useGame();
  const [selectedPoints, setSelectedPoints] = useState(null);
  const [selectedAbility, setSelectedAbility] = useState('');
  const [isHero, setIsHero] = useState(false);

  useEffect(() => {
    if (cardData && cardData.points) {
      setSelectedPoints(cardData.points);
      setSelectedAbility(cardData.abilities);
      setIsHero(cardData.is_hero);
    } else {
      setSelectedPoints(null);
      setSelectedAbility('');
      setIsHero(false);
    }
  }, [cardData]);

  const handleSubmit = async () => {
    if (cardData) {
      await gameService.updateCard({
        cardId: cardData.id,
        rowId,
        points: selectedPoints,
        abilities: selectedAbility,
        isHero: isHero,
      });
    } else {
      await gameService.createCard({
        rowId,
        points: selectedPoints,
        abilities: selectedAbility,
        isHero: isHero,
      });
    }
    const updatedGame = await gameService.fetchGameState();
    setGame(updatedGame);
    onClose();
  };

  const handleDelete = async () => {
    await gameService.deleteCard(cardData.id);
    const updatedGame = await gameService.fetchGameState();
    setGame(updatedGame);
    onClose();
  }

  const modalTitle = cardData ? "Edit Card" : "Create a New Card";

  return (
    <Dialog fullWidth maxWidth="md" open={isOpen} onClose={onClose} aria-labelledby="card-modal-title">
      <DialogTitle id="card-modal-title">{modalTitle}</DialogTitle>
      <DialogContent>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
          {Array.from({length: 16}, (_, i) => (
            <Button
              key={i}
              variant={selectedPoints === i ? "contained" : "outlined"}
              onClick={() => setSelectedPoints(i)}
              sx={{m: 0.5, minWidth: '55px'}}
            >
              {i}
            </Button>
          ))}
        </div>
        <div style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem'}}>
          <Tooltip title='Hero'>
            <Button
              variant={isHero === true ? "contained" : "outlined"}
              onClick={() => setIsHero(isHero !== true)}
              sx={{m: 5, minWidth: '70px', minHeight: '70px', alignItems: 'center', justifyContent: 'center'}}
            >
              <img src={sun} className="sun-button" alt='sun-button'/>
            </Button>
          </Tooltip>

          {Object.entries(ICONS).map(([ability, Icon]) => (
            <Tooltip title={humanize(ability)}>
              <Button
                key={ability}
                variant={selectedAbility === ability ? "contained" : "outlined"}
                onClick={() => setSelectedAbility(selectedAbility === ability ? '' : ability)}
                sx={{m: 5, minWidth: '70px', minHeight: '70px', alignItems: 'center', justifyContent: 'center'}}
              >
                <Icon className="svg-icons"/>
              </Button>
            </Tooltip>
          ))}
        </div>
      </DialogContent>
      <DialogActions>
        {cardData && <Button onClick={handleDelete} color="error">Delete</Button>}
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit}
                disabled={selectedPoints === null}>{cardData ? "Update Card" : "Create Card"}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default CardModal;
