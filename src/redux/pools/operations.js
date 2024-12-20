import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchMyPools, fetchWePools } from "../../utils/fakeApi";

export const fetchWePoolsApi = createAsyncThunk(
  "pools/fetchWePools",
  async (userId, thunkApi) => {
    try {
      const data = await fetchWePools(userId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchMyPoolsApi = createAsyncThunk(
  "pools/fetchMyPools",
  async (userId, thunkApi) => {
    try {
      const data = await fetchMyPools(userId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
