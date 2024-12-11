export const selectBalanceHistory = (state) => {
  return state.balance.history;
}
export const selectBalanceCoins = (state) => {
  return state.balance.coins;
}

export const selectBalanceHistoryLoading = state => {
  return state.balance.loading.history;
}
export const selectBalanceCoinsLoading = state => {
  return state.balance.loading.coins;
}

export const selectBalanceEyeOpen = state => state.balance.eyeOpen;
export const selectHistoryOpen = state => state.balance.historyOpen;