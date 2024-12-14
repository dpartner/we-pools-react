import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchDailyTasks,
  fetchDailyUpgrades,
  fetchUser,
} from "../../utils/fakeApi";
import { delay } from "../../utils/delay";

export const fetchDailyUpgradesApi = createAsyncThunk(
  "daily/fetchDailyUpgrade",
  async (userId, thunkApi) => {
    try {
      const data = await fetchDailyUpgrades(userId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchDailyTasksApi = createAsyncThunk(
  "daily/fetchDailyTasks",
  async (userId, thunkApi) => {
    try {
      const data = await fetchDailyTasks(userId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchDailyWeBalanceApi = createAsyncThunk(
  "daily/fetchDailyWeBalance",
  async (userId, thunkApi) => {
    try {
      const data = await fetchUser(userId);
      const weBalance = data.weBalance;
      return weBalance;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const changeDailyWeBalanceApi = createAsyncThunk(
  "daily/changeDailyWeBalanceApi",
  async (newWeBalance, thunkApi) => {
    try {
      // здесь ставишь запрос на зименение weBalance на бекенде вместо const data должен быть ответ сервера, или удалось изменить данные.
      const data = newWeBalance;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteDailyUpgradeApi = createAsyncThunk(
  "daily/deleteDailyUpgradeApi",
  async (upgradeId, thunkApi) => {
    try {
      // здесь ставишь запрос на зименение upgradeList на бекенде вместо const data должен быть ответ сервера, или удалось изменить данные.
      await delay(500);
      const data = upgradeId;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const deleteDailyTaskApi = createAsyncThunk(
  "daily/deleteDailyTaskApi",
  async (upgradeId, thunkApi) => {
    try {
      // здесь ставишь запрос на зименение taskList на бекенде вместо const data должен быть ответ сервера, или удалось изменить данные.
      await delay(500);
      const data = upgradeId;
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
