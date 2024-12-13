import { createSelector } from "@reduxjs/toolkit";
import { selectUserLoading } from "../users/selectors";

export const selectBalanceHistory = (state) => {
  return state.balance.history;
}
export const selectBalanceTokens = (state) => {
  return state.balance.tokens;
}

export const selectBalanceHistoryLoading = state => {
  return state.balance.loading.history;
}
export const selectBalanceTokensLoading = state => {
  return state.balance.loading.tokens;
}

export const selectBalanceError = state => state.balance.error;

export const selectBalanceEyeOpen = state => state.balance.eyeOpen;
export const selectBalanceHistoryOpen = state =>  state.balance.historyOpen;

export const selectLoadingBalancePage = createSelector([selectUserLoading, selectBalanceTokensLoading, selectBalanceHistoryLoading],(userLoading, balanceHistoryLoading, balanceTokensLoading)=> userLoading || balanceHistoryLoading || balanceTokensLoading);