import { createSelector } from "@reduxjs/toolkit";

export const selectDailyUpgrades = (state) => state.daily.upgrades;
export const selectDailyTasks = (state) => state.daily.tasks;
export const selectDailyUpgradesLoading = (state) =>
  state.daily.loading.upgrades;
export const selectDailyTasksLoading = (state) => state.daily.loading.tasks;
export const selectDailyError = (state) => state.daily.error;

export const selectDailyPageLoading = createSelector(
  [selectDailyUpgradesLoading, selectDailyTasksLoading],
  (upgrades, tasks) => upgrades || tasks
);

export const selectDailyWeBalanceCordinate = (state) =>
  state.daily.weBalanceCordinate;
export const selectDailyHeaderHeight = (state) => state.daily.headerHeight;
export const selectDailyUpgradeNotif = (state) => {
  console.log(state.daily.upgradeNotif);

  return state.daily.upgradeNotif;
};
export const selectDailyTaskNotif = (state) => state.daily.taskNotif;
