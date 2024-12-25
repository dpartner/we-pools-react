import { createSlice } from "@reduxjs/toolkit";
import {
  deleteDailyUpgradeApi,
  changeDailyWeBalanceApi,
  fetchDailyTasksApi,
  fetchDailyUpgradesApi,
  fetchDailyWeBalanceApi,
  deleteDailyTaskApi,
} from "./operations";

const initialState = {
  upgrades: [],
  tasks: [],
  weBalance: {
    value: 0,
    updaytingColor: false,
    cordinate: {
      top: null,
      left: null,
    },
  },
  upgradeNotif: {
    top: 0,
    left: 0,
    translateX: 0,
    translateY: 0,
    shown: false,
  },
  taskNotif: {
    top: null,
    left: null,
    translateX: 0,
    translateY: 0,
    shown: false,
    text: null,
  },
  loading: {
    weBalanceValue: false,
    upgrades: false,
    tasks: false,
  },
  error: null,
};

const slice = createSlice({
  name: "daily",
  initialState,
  reducers: {
    initWeBalance(state, action) {
      state.weBalance = action.payload;
    },
    setUpgradeNotif(state, action) {
      state.upgradeNotif = action.payload;
    },
    setTaskNotif(state, action) {
      state.taskNotif = action.payload;
    },
    setWeBalanceColor(state, action) {
      state.weBalance.updaytingColor = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDailyUpgradesApi.fulfilled, (state, action) => {
        state.upgrades = action.payload;
        state.loading.upgrades = false;
      })
      .addCase(fetchDailyUpgradesApi.pending, (state) => {
        state.loading.upgrades = true;
      })
      .addCase(fetchDailyUpgradesApi.rejected, (state, action) => {
        state.loading.upgrades = false;
        state.error = action.payload;
      })
      .addCase(fetchDailyTasksApi.fulfilled, (state, action) => {
        state.tasks = action.payload;
        state.loading.tasks = false;
      })
      .addCase(fetchDailyTasksApi.pending, (state) => {
        state.loading.tasks = true;
      })
      .addCase(fetchDailyTasksApi.rejected, (state, action) => {
        state.loading.tasks = false;
        state.error = action.payload;
      })
      .addCase(fetchDailyWeBalanceApi.fulfilled, (state, action) => {
        state.weBalance.value = action.payload;
        state.loading.weBalanceValue = false;
      })
      .addCase(fetchDailyWeBalanceApi.pending, (state) => {
        state.loading.weBalanceValue = true;
      })
      .addCase(fetchDailyWeBalanceApi.rejected, (state, action) => {
        state.loading.weBalanceValue = false;
        state.error = action.payload;
      })
      .addCase(changeDailyWeBalanceApi.fulfilled, (state, action) => {
        state.weBalance.value = action.payload;
        state.loading.weBalanceValue = false;
      })
      .addCase(changeDailyWeBalanceApi.pending, (state) => {
        state.loading.weBalanceValue = true;
      })
      .addCase(changeDailyWeBalanceApi.rejected, (state, action) => {
        state.loading.weBalanceValue = false;
        state.error = action.payload;
      })
      .addCase(deleteDailyUpgradeApi.fulfilled, (state, action) => {
        state.upgrades = state.upgrades.filter(
          (upgrade) => upgrade.id !== action.payload
        );
        // state.loading.upgrades = false;
      })
      // .addCase(deleteDailyUpgradeApi.pending, (state) => {
      //   state.loading.upgrades = true;
      // })
      .addCase(deleteDailyUpgradeApi.rejected, (state, action) => {
        // state.loading.upgrades = false;
        state.error = action.payload;
      })
      .addCase(deleteDailyTaskApi.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter((task) => task.id !== action.payload);

        // state.loading.upgrades = false;
      })
      // .addCase(deleteDailyTaskApi.pending, (state) => {
      //   state.loading.upgrades = true;
      // })
      .addCase(deleteDailyTaskApi.rejected, (state, action) => {
        // state.loading.upgrades = false;
        state.error = action.payload;
      });
  },
});

export const {
  initWeBalance,
  setUpgradeNotif,
  setTaskNotif,
  setWeBalanceColor,
} = slice.actions;

export default slice.reducer;
