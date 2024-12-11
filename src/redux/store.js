import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users/slice';
import balanceHistoryReducer from './balance/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    balance: balanceHistoryReducer,
  }
});