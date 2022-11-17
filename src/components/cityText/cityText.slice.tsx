import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: '',
  isClicked: false,
  errorMessage: '',
  weatherData: [],
  loading: false,
};

export const cityTextSlice = createSlice({
  name: 'cityText',
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
      state.loading = action.payload;
    },
  },
});

export const { setCity, setCityIsClicked, setErrorMessage, setWeatherData, setLoading } = cityTextSlice.actions;

export default cityTextSlice.reducer;
