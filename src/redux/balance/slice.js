import { createSlice, isAnyOf } from "@reduxjs/toolkit"
import { fetchBalanceTokensApi, fetchBalanceHistoryApi } from "./operations";

const initialState = {
  history: [],
  tokens: [],
  loading: {
    history: false,
    tokens: false,
  },
  eyeOpen: true,
  historyOpen: false,
  error: null,
}

const slice = createSlice({
  name: 'balance',
  initialState,
  reducers: {
    toggleEyeOpen(state) {
      state.eyeOpen = !state.eyeOpen;
    },
    toggleHistoryOpen(state) {
      state.historyOpen = !state.historyOpen;
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
    .addCase(fetchBalanceTokensApi.fulfilled, (state, action) => {
      state.tokens = action.payload;  
      state.loading.tokens = false;

    })
    .addCase(fetchBalanceTokensApi.pending, (state) => {
      state.loading.tokens = true;
    })
    .addMatcher(isAnyOf(fetchBalanceHistoryApi.rejected, fetchBalanceTokensApi.rejected), (state, action)=> {
      state.loading = false;
      state.error = action.payload;
    })
  }
});

export const {toggleEyeOpen, toggleHistoryOpen} = slice.actions;
export default slice.reducer;