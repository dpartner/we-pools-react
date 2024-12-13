import { createAsyncThunk } from "@reduxjs/toolkit"
import { fetchDailyTasks, fetchDailyUpgrades } from "../../utils/fakeApi";

export const fetchDailyUpgradesApi = createAsyncThunk(
  "daily/fetchDailyUpgrade", async(userId, thunkApi) =>{
    try {
      const data = await fetchDailyUpgrades(userId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchDailyTasksApi = createAsyncThunk('daily/fetchDailyTasks', async(userId, thunkApi) => {
  try {
    const data = await fetchDailyTasks(userId);
    return data;
  } catch (error) {
    return thunkApi.rejectWithValue(error.message);
  }
});