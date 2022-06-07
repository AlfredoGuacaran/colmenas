import React from 'react';
import { Alert, Box, Stack, Button, Slide } from '@mui/material';

const Alerts = ({ loadingStatus, handleReset, error }) => {
  return (
    <Box sx={{ mt: 2 }}>
      {loadingStatus === 'noLoading' && (
        <Stack sx={{ width: 'fit-content' }} spacing={2}>
          <Alert severity='info'>Debe ingresar los datos correctos</Alert>
        </Stack>
      )}
      <Slide direction='down' in={loadingStatus === 'succeeded' || loadingStatus === 'failed'} mountOnEnter unmountOnExit>
        <Stack sx={{ width: 'fit-content' }} spacing={2}>
          {loadingStatus === 'succeeded' && (
            <Alert
              severity='success'
              action={
                <Button color='inherit' size='small' variant='outlined' onClick={handleReset}>
                  NUEVO REGISTRO
                </Button>
              }>
              Registro de cosecha exitoso
            </Alert>
          )}
          {loadingStatus === 'failed' && (
            <Alert
              severity='error'
              action={
                <Button color='inherit' size='small' variant='outlined' onClick={handleReset}>
                  NUEVO INTENTO
                </Button>
              }>
              {`Intente nuevamente ${error}`}
            </Alert>
          )}
        </Stack>
      </Slide>
    </Box>
  );
};

export default Alerts;
