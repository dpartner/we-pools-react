import { configureStore } from "@reduxjs/toolkit";
import userReducer from './users/slice';
import balanceHistoryReducer from './balance/slice';
import dailyReducer from './daily/slice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    balance: balanceHistoryReducer,
    daily: dailyReducer
  }
});