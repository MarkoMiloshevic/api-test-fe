import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './combine';

export const store = configureStore({
  reducer:rootReducer,
});
