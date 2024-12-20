import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/slice";
import balanceHistoryReducer from "./balance/slice";
import dailyReducer from "./daily/slice";
import poolsReducer from "./pools/slice";
import inviteReducer from "./invite/slice";
import tasksReducer from "./tasks/slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    balance: balanceHistoryReducer,
    daily: dailyReducer,
    pools: poolsReducer,
    invite: inviteReducer,
    tasks: tasksReducer,
  },
});
