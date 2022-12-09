import { combineReducers, configureStore } from '@reduxjs/toolkit';
import CryptoSlice from './CryptoSlice';
import DetailSlice from './DetailSlice';

const crcReducers = combineReducers({
  crypto: CryptoSlice,
  detail: DetailSlice,
});

const store = configureStore({
  reducer: crcReducers,
});

export default store;
