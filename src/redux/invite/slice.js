import { createSlice } from "@reduxjs/toolkit";
import { fetchFriendListApi } from "./operations";

const initialState = {
  items: {
    friendsList: [],
  },
  loading: {
    friendsList: false,
  },
  error: false,
  refLinkOpen: false,
};

const slice = createSlice({
  name: "invite",
  initialState,
  reducers: {
    toogleRefLinkWrap(state) {
      state.refLinkOpen = !state.refLinkOpen;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFriendListApi.fulfilled, (state, action) => {
        state.items.friendsList = action.payload;
        state.loading.friendsList = false;
      })
      .addCase(fetchFriendListApi.pending, (state) => {
        state.loading.friendsList = true;
      })
      .addCase(fetchFriendListApi.rejected, (state, action) => {
        state.error = action.payload;
        state.loading.friendsList = false;
      });
  },
});

export const { toogleRefLinkWrap } = slice.actions;

export default slice.reducer;
