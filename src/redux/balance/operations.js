import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTokens, fetchHistory } from "../../utils/fakeApi";

export const fetchBalanceHistoryApi = createAsyncThunk('balance/fetchHistory', async(userId, thunkApi) => {
  try {
    const history = await fetchHistory(userId);
    return history;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message); 
  }
});

export const fetchBalanceTokensApi = createAsyncThunk('balance/fetchTokens', async(userId, thunkApi) => {
  try {
    const coins = await fetchTokens(userId);
    
    return coins;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message); 
  }
})