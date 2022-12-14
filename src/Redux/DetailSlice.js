import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchDetail = createAsyncThunk('crypto/Detail', async (id) => {
  const response = await fetch(
    `https://api.coinstats.app/public/v1/coins/${id}`
  );
  const detail = await response.json();
  const { coin } = detail;
  return coin;
});
const initialState = [];
const DetailSlice = createSlice({
  name: 'detail',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetail.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export default DetailSlice.reducer;
