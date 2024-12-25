import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  notification: {
    message: "",
    isApprove: true,
    shown: false,
  },
  menuOpen: false,
  inviterOpen: false,
};

const slice = createSlice({
  name: "utils",
  initialState,
  reducers: {
    setNotification(state, action) {
      state.notification = action.payload;
    },
    menuToggle(state) {
      state.menuOpen = !state.menuOpen;
    },
    menuClose(state) {
      state.menuOpen = false;
    },
    setInviter(state, action) {
      state.inviterOpen = action.payload;
    },
  },
});

export const { setNotification, menuToggle, menuClose, setInviter } =
  slice.actions;

export default slice.reducer;
