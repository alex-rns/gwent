import React from 'react';
import { GiFireGem } from "react-icons/gi";

function PlayerLives({ player }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {Array.from({ length: player.lives }, (_, index) => (
        <GiFireGem key={index} className="large-icon life-icon" />
      ))}
    </div>
  );
}

export default PlayerLives;
