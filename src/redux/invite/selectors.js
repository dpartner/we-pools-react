export const selectInviteFriendList = (state) => state.invite.items.friendsList;
export const selectInviteLoadingFriendList = (state) =>
  state.invite.loading.friendsList;
export const selectInviteError = (state) => state.invite.error;

export const selectToogleInviteLinkWrap = (state) => state.invite.refLinkOpen;
