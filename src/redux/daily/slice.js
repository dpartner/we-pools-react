import { createSlice } from "@reduxjs/toolkit";
import { fetchDailyTasksApi, fetchDailyUpgradesApi } from "./operations";

const initialState = {
  upgrades: [],
  tasks: [],
  headerHeight: null,
  weBalanceCordinate: {
    top: null,
    left: null,
  },
  upgradeNotif: {
    top: 0,
    left: 0,
    text: null,
    shown: true,
  },
  taskNotif: {
    top: null,
    left: null,
    text: null,
  },
  loading: {
    upgrades: false,
    tasks: false,
  },
  error: null,
};

const slice = createSlice({
  name: "daily",
  initialState,
  reducers: {
    initWeBalanceCordinate(state, action) {
      state.weBalanceCordinate = action.payload;
    },
    addHeaderHeight(state, action) {
      state.headerHeight = action.payload;
    },
    setUpgradeNotif(state, action) {
      state.upgradeNotif = action.payload;
    },
    setTaskNotif(state, action) {
      state.taskNotif = action.payload;
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
      });
  },
});

export const {
  initWeBalanceCordinate,
  addHeaderHeight,
  setUpgradeNotif,
  setTaskNotif,
} = slice.actions;

export default slice.reducer;
