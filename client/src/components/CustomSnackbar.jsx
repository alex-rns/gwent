import { Snackbar, Alert } from '@mui/material'
import { useSnackbar } from '../contexts/SnackbarContext'
import { useTranslation } from 'react-i18next'

function CustomSnackbar() {
  const { t } = useTranslation()

  const { snackbarOpen, snackbarMessage, snackbarSeverity, closeSnackbar } =
    useSnackbar()

  return (
    <Snackbar
      open={snackbarOpen}
      autoHideDuration={6000}
      onClose={closeSnackbar}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
    >
      <Alert
        onClose={closeSnackbar}
        severity={snackbarSeverity}
        sx={{ width: '100%' }}
        elevation={6}
        variant="filled"
      >
        {t(snackbarMessage)}
      </Alert>
    </Snackbar>
  )
}

export default CustomSnackbar
