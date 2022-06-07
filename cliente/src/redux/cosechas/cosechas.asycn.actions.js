import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCosechas, putCosecha } from './cosechas.api';

export const createCosecha = createAsyncThunk('cosechas/putcosecha', async (newCosecha) => {
  const response = await putCosecha(newCosecha);
  return response.data;
});

export const fetchCosechas = createAsyncThunk('cosechas/getcosechas', async () => {
  const response = await getCosechas();
  return response.data;
});
