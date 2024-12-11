import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCoins, fetchHistory } from "../../utils/fakeApi";

export const fetchBalanceHistoryApi = createAsyncThunk('balance/fetchHistory', async(userId, thunkApi) => {
  try {
    const history = await fetchHistory(userId);
    return history;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message); 
  }
});

export const fetchBalanceCoinsApi = createAsyncThunk('balance/fetchCoins', async(userId, thunkApi) => {
  try {
    const coins = await fetchCoins(userId);
    
    return coins;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message); 
  }
})