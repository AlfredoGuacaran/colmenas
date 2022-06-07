import { createSlice } from '@reduxjs/toolkit';
import { createCosecha, fetchCosechas } from './cosechas.asycn.actions';

const initialState = { cosechas: [], fetchStatus: 'noLoading', createStatus: 'noLoading', error: null };

const cosechasSlice = createSlice({
  name: 'cosechas',
  initialState,
  reducers: {
    setCreateStatus: (state, action) => {
      state.createStatus = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      /*GET COSECHAS*/
      .addCase(fetchCosechas.pending, (state, action) => {
        state.fetchStatus = 'loading';
        state.error = null;
      })
      .addCase(fetchCosechas.fulfilled, (state, action) => {
        state.fetchStatus = 'noLoading';
        state.cosechas = action.payload.reverse();
      })
      .addCase(fetchCosechas.rejected, (state, action) => {
        state.fetchStatus = 'failed';
        state.error = action.error.message;
      })
      //   /*CREATE COSECHA*/
      .addCase(createCosecha.pending, (state) => {
        state.createStatus = 'loading';
      })
      .addCase(createCosecha.fulfilled, (state, action) => {
        const { cosechas } = state;
        state.createStatus = cosechas.unshift(action.payload);
        state.createStatus = 'succeeded';
      })
      .addCase(createCosecha.rejected, (state, action) => {
        console.log(action);
        state.createStatus = 'failed';
        state.error = 'No se pudo procesar el registro';
      });
  },
});
export const { setCreateStatus } = cosechasSlice.actions;
export const selectCosechas = (state) => state.cosechas;

export default cosechasSlice.reducer;
