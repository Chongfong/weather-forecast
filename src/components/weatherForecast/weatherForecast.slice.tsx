import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: '',
  isClicked: false,
  errorMessage: '',
  weatherData: [],
  isloading: false,
};

export const weatherForecastSlice = createSlice({
  name: 'weatherForecast',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
    setCityIsClicked: (state, action) => {
      state.isClicked = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
    setWeatherData: (state, action) => {
      state.weatherData = action.payload;
    },
    setLoading: (state, action) => {
      state.isloading = action.payload;
    },
  },
});

export const { setCity, setCityIsClicked, setErrorMessage, setWeatherData, setLoading } = weatherForecastSlice.actions;

export default weatherForecastSlice.reducer;
