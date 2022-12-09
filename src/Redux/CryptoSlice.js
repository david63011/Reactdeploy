import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCryptoData = createAsyncThunk('crypto/FetchAll', async () => {
  const response = await fetch('https://api.coinstats.app/public/v1/coins/');
  const data = await response.json();
  const { coins } = data;
  return coins;
});

const initialState = [];
const cryptoSlice = createSlice({
  name: 'crypto',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoData.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default cryptoSlice.reducer;
