import { createSelector } from "@reduxjs/toolkit";
import { selectBalanceTokensLoading, selectBalanceHistoryLoading, } from "../balance/selectors";

export const selectUser = (state) => {
  return state.user.item;
}

export const selectUserLoading = state => {
  return state.user.loading;
}

export const selectGlobalLoading = createSelector([selectUserLoading, selectBalanceTokensLoading, selectBalanceHistoryLoading],(userLoading, balanceHistoryLoading, balanceTokensLoading)=> userLoading || balanceHistoryLoading || balanceTokensLoading);

export const selectError = state => {
  return state.user.error;
}