import { createSlice } from "@reduxjs/toolkit";
import { fetchMyPoolsApi, fetchWePoolsApi } from "./operations";

const initialState = {
  items: {
    we: [],
    my: [],
  },
  loading: {
    we: false,
    my: false,
  },
  error: null,
  toogle: {
    translateX: 0,
    poolsWrapWidth: null,
  },
};

const slice = createSlice({
  name: "pools",
  initialState,
  reducers: {
    setTranslateXMyPools(state, action) {
      state.toogle.translateX = action.payload;
    },
    setPoolsWrapWidth(state, action) {
      state.toogle.poolsWrapWidth = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWePoolsApi.fulfilled, (state, action) => {
        state.items.we = action.payload;
        state.loading.we = false;
      })
      .addCase(fetchWePoolsApi.pending, (state) => {
        state.loading.we = true;
      })
      .addCase(fetchWePoolsApi.rejected, (state, action) => {
        state.error = action.error;
        state.loading.we = false;
      })
      .addCase(fetchMyPoolsApi.fulfilled, (state, action) => {
        state.items.my = action.payload;
        state.loading.my = false;
      })
      .addCase(fetchMyPoolsApi.pending, (state) => {
        state.loading.my = true;
      })
      .addCase(fetchMyPoolsApi.rejected, (state, action) => {
        state.error = action.error;
        state.loading.my = false;
      });
  },
});

export const { setTranslateXMyPools, setPoolsWrapWidth } = slice.actions;

export default slice.reducer;
