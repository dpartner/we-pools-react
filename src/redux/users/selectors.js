import { createSelector } from "@reduxjs/toolkit";
import { selectBalanceCoinsLoading, selectBalanceHistoryLoading, } from "../balance/selectors";

export const selectUser = (state) => {
  return state.user.item;
}

export const selectUserLoading = state => {
  return state.user.loading;
}

export const selectGlobalLoading = createSelector([selectUserLoading, selectBalanceCoinsLoading, selectBalanceHistoryLoading],(userLoading, balanceHistoryLoading, balanceCoinsLoading)=> userLoading || balanceHistoryLoading || balanceCoinsLoading);

export const selectError = state => {
  return state.user.error;
}