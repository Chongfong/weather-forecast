import { configureStore } from '@reduxjs/toolkit';
import weatherForecastReducer from '../components/weatherForecast/weatherForecast.slice';

const store = configureStore({
  reducer: {
    weatherForecast: weatherForecastReducer,
  },
});

export default store;

export type AppState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
