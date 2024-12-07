export const selectUser = (state) => {
  
  return state.user.item;
}
export const selectLoading = (state) => {
  return state.user.loading;
}

export const selectError = state => {
  return state.user.error;
}