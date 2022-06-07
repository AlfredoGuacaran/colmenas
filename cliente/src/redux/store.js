import { configureStore } from '@reduxjs/toolkit';

import cosechaReducer from './cosechas/cosechas.slice';

export const store = configureStore({
  reducer: {
    cosechas: cosechaReducer,
  },
});
