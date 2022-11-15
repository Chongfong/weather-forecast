import { configureStore } from '@reduxjs/toolkit';
import cityTextReducer from '../components/cityText/cityText.slice';

const store = configureStore({
  reducer: {
    cityText: cityTextReducer,
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
