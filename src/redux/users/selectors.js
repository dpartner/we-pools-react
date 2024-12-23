export const selectUser = (state) => state.user.item;

export const selectUserLoading = (state) => state.user.loading;

export const selectError = (state) => state.user.error;

export const selectMenuToggle = (state) => state.user.menuOpen;

export const selectInviterToggle = (state) => state.user.inviterOpen;

export const selectIsLoggedIn = (state) => state.user.isLogged;
