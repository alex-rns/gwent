import React, { useState } from 'react';
import { gameService } from '../../features/gameService';
import { Stack, Button } from "@mui/material";
import { GiHuntingHorn, GiMushroomGills } from "react-icons/gi";
import { useGame } from "../../contexts/GameContext.jsx";

function RowEffects({ rowId }) {
  const { game, setGame } = useGame();
  const [effectActivated, setEffectActivated] = useState(null);

  const handleEffectChange = async (effectType) => {
    if (effectActivated) return;

    await gameService.changeRowEffect(rowId, effectType);
    const updatedGame = await gameService.fetchGameState();
    setGame(updatedGame);
    setEffectActivated(effectType);
  };

  return (
    <Stack direction="column" justifyContent="center" spacing={2}>
      <Button
        variant="contained"
        color={effectActivated === "horn" ? "secondary" : "primary"}
        onClick={() => handleEffectChange("horn")}
        disabled={!!effectActivated && effectActivated !== "horn"}
      >
        <GiHuntingHorn className="large-icon" />
      </Button>
      <Button
        variant="contained"
        color={effectActivated === "mardroeme" ? "secondary" : "primary"}
        onClick={() => handleEffectChange("mardroeme")}
        disabled={!!effectActivated && effectActivated !== "mardroeme"}
      >
        <GiMushroomGills className="large-icon" />
      </Button>
    </Stack>
  );
}

export default RowEffects;
