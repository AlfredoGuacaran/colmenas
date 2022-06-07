import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Card, CardContent, Grid, Button, TextField } from '@mui/material';
import NumberFormat from 'react-number-format';
import { createCosecha } from '../redux/cosechas/cosechas.asycn.actions';
import { selectCosechas, setCreateStatus } from '../redux/cosechas/cosechas.slice';
import Alerts from './Alerts';

import moment from 'moment';

const FormNewCosecha = () => {
  const { createStatus, error } = useSelector(selectCosechas);

  const dispatch = useDispatch();

  const [formData, setFomData] = useState({ apicultor: '', colmena: '', gramosMiel: '' });
  const handleChange = (e) => {
    setFomData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const currentDate = moment(new Date()).format('DD/MM/YYYY');
    dispatch(createCosecha({ ...formData, fechaUltimaCosecha: currentDate }));
  };

  const handleReset = () => {
    setFomData({ apicultor: '', colmena: '', gramosMiel: '' });
    dispatch(setCreateStatus('noLoading'));
  };

  return (
    <Card>
      <Box
        sx={{
          bgcolor: '#e5810e',
          color: '#fff',
          p: 1,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
        INGRESE UN REGISTRO
      </Box>
      <CardContent>
        <Box component='form' validate onSubmit={handleSubmit}>
          <Grid container direction='row' justifyContent='center' alignItems='center' spacing={2}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField fullWidth required name='apicultor' type='text' size='small' label='Apicultor' variant='outlined' onChange={handleChange} value={formData.apicultor} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <TextField fullWidth required name='colmena' type='text' size='small' label='Colmena' variant='outlined' onChange={handleChange} value={formData.colmena} />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <NumberFormat
                required
                label='Gramos de miel'
                name='gramosMiel'
                value={formData.gramosMiel}
                displayType='input'
                customInput={TextField}
                type='text'
                allowNegative={false}
                thousandSeparator=''
                decimalSeparator=','
                decimalScale={false}
                fullWidth={true}
                onChange={handleChange}
                isAllowed={({ value }) => value >= 0}
              />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button size='normal' color='primary' variant='outlined' type='submit' fullWidth disabled={createStatus !== 'noLoading'}>
                Enviar registro
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Alerts {...{ loadingStatus: createStatus, handleReset, error }} />
      </CardContent>
    </Card>
  );
};

export default FormNewCosecha;
