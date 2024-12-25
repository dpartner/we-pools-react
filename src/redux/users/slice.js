import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { fetchUserApi } from "./operations";

const initialState = {
  item: {},
  loading: false,
  error: null,
  isLogged: false,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogged(state, action) {
      state.isLogged = action.payload;
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

export const { setLogged } = slice.actions;

export default slice.reducer;
