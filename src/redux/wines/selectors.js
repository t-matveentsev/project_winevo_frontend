import { createSelector } from "@reduxjs/toolkit";

export const selectWinesState = (state) => state.wines.wines;

export const selectCurrentWine = (state) => selectWinesState(state).currentWine;

export const selectWines = (state) => selectWinesState(state).items;

export const selectWinesMeta = createSelector([selectWinesState], (wine) => ({
  page: wine.page,
  perPage: wine.perPage,
  totalItems: wine.totalItems,
  totalPages: wine.totalPages,
  hasNextPage: wine.hasNextPage,
  hasPreviousPage: wine.hasPreviousPage,
  loading: wine.loading,
  error: wine.error,
}));

export const selectLoading = (state) => state.wines.wines.loading;
