import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { fetchBalanceCoinsApi, fetchBalanceHistoryApi } from "./operations";

const initialState = {
  history: [],
  coins: [],
  loading: {
    history: false,
    coins: false,
  },
  eyeOpen: true,
  historyOpen: false,
}

const slice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    toggleEyeOpen(state) {
      state.eyeOpen = !state.eyeOpen;
    },
    toggleHistoryOpen(state) {
      state.eyeOpen = !state.eyeOpen;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchBalanceHistoryApi.fulfilled, (state, action) => {
      state.history = action.payload;
      state.loading.history = false;
    })
    .addCase(fetchBalanceHistoryApi.pending, (state) => {
      state.loading.history = true;
    })
    .addCase(fetchBalanceCoinsApi.fulfilled, (state, action) => {
      state.coins = action.payload;  
      state.loading.coins = false;

    })
    .addCase(fetchBalanceCoinsApi.pending, (state) => {
      state.loading.coins = true;
    })
    .addMatcher(isAnyOf(fetchBalanceHistoryApi.rejected, fetchBalanceCoinsApi.rejected), (state, action)=> {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export const {toggleEyeOpen, toggleHistoryOpen} = slice.actions;
export default slice.reducer;