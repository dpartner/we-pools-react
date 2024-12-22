import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUserApi } from "./operations";

const initialState = {
  item: {},
  loading: false,
  error: null,
  menuOpen: false,
  inviterOpen: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    menuToggle(state) {
      state.menuOpen = !state.menuOpen;
    },
    menuClose(state) {
      state.menuOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserApi.fulfilled, (state, action) => {
        state.item = action.payload;
      })
      .addMatcher(isAnyOf(fetchUserApi.pending), (state) => {
        state.loading = true;
      })
      .addMatcher(isAnyOf(fetchUserApi.fulfilled), (state) => {
        state.loading = false;
      })
      .addMatcher(isAnyOf(fetchUserApi.rejected), (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { menuToggle, menuClose } = slice.actions;

export default slice.reducer;
