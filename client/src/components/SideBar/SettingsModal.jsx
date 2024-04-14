import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import Button from "@mui/material/Button";
import { useTranslation } from "react-i18next";
import { Stack } from "@mui/material";

function SettingsModal({isOpen, onClose, changeLanguage, handleResetGame}) {
  const { t} = useTranslation();

  return (
    <Dialog open={isOpen} onClose={onClose} aria-labelledby="card-modal-title">
      <DialogContent sx={{ textAlign: "center" }}>
        <Stack sx={{ marginBottom: "1rem" }}>
          <Button variant="contained" onClick={handleResetGame}>
            {t('Reset game')}
          </Button>
        </Stack>
        <Button variant="contained" onClick={() => changeLanguage('en')}>EN</Button>
        <Button variant="contained" onClick={() => changeLanguage('ua')}>UA</Button>
      </DialogContent>
    </Dialog>
  );
}

export default SettingsModal;

