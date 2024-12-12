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

export const selectBalanceEyeOpen = state => state.balance.eyeOpen;
export const selectBalanceHistoryOpen = state =>  state.balance.historyOpen;