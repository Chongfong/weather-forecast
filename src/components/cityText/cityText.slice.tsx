import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: '',
  isClicked: false,
  errorMessage: '',
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
  },
});

export const { setCity, setCityIsClicked, setErrorMessage } = cityTextSlice.actions;

export default cityTextSlice.reducer;
