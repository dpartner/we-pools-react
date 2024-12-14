import { createSelector } from "@reduxjs/toolkit";

export const selectDailyUpgrades = (state) => state.daily.upgrades;
export const selectDailyTasks = (state) => state.daily.tasks;
export const selectDailyUpgradesLoading = (state) =>
  state.daily.loading.upgrades;
export const selectDailyTasksLoading = (state) => state.daily.loading.tasks;
export const selectDailyWeBalanceLoading = (state) =>
  state.daily.loading.weBalance;

export const selectDailyError = (state) => state.daily.error;

export const selectDailyPageLoading = createSelector(
  [
    selectDailyUpgradesLoading,
    selectDailyTasksLoading,
    selectDailyWeBalanceLoading,
  ],
  (upgrades, tasks, weBalance) => upgrades || tasks || weBalance
);

export const selectDailyWeBalanceCordinate = (state) =>
  state.daily.weBalance.cordinate;
export const selectDailyWeBalanceValue = (state) => state.daily.weBalance.value;
export const selectDailyWeBalanceColor = (state) =>
  state.daily.weBalance.updaytingColor;

export const selectDailyUpgradeNotif = (state) => state.daily.upgradeNotif;
export const selectDailyTaskNotif = (state) => state.daily.taskNotif;
export const selectDailyFirstLoad = (state) => state.daily.firstLoad;
