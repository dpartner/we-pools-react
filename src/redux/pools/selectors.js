import { createSelector } from "@reduxjs/toolkit";

export const selectWePools = (state) => state.pools.items.we;
export const selectWePoolsLoading = (state) => state.pools.loading.we;

export const selectPoolsError = (state) => state.pools.error;

export const selectMyPools = (state) => state.pools.items.my;
export const selectMyPoolsLoading = (state) => state.pools.loading.my;

export const selectPoolPageLoad = createSelector(
  [selectWePoolsLoading, selectMyPoolsLoading],
  (weLoading, myLoading) => weLoading || myLoading
);

export const selectTranslateXMyPools = (state) => state.pools.toogle.translateX;
export const selectPoolsWrapWidth = (state) =>
  state.pools.toogle.poolsWrapWidth;
