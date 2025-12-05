import { createSlice } from "@reduxjs/toolkit";
import { deleteWineById, fetchWines, updateWine } from "./operations";

const initialState = {
  wines: {
    items: [],
    loading: false,
    error: null,
    page: 1,
    perPage: 10,
    totalItems: 0,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  },
};

const slice = createSlice({
  name: "wines",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWines.pending, (state) => {
        state.wines.loading = true;
      })
      .addCase(fetchWines.fulfilled, (state, action) => {
        const { items, append, ...meta } = action.payload;
        state.wines.items = append ? [...state.wines.items, ...items] : items;
        state.wines.loading = false;
        state.wines.error = null;
        Object.assign(state.wines, meta);
      })
      .addCase(fetchWines.rejected, (state, action) => {
        state.wines.loading = false;
        state.wines.error = action.payload;
      })
      .addCase(deleteWineById.pending, (state) => {
        state.wines.loading = true;
      })
      .addCase(deleteWineById.fulfilled, (state, action) => {
        state.wines.items = state.wines.items.filter(
          (w) => w._id !== action.payload
        );
        state.wines.totalItems = Math.max(0, state.wines.totalItems - 1);
        state.wines.loading = false;
      })
      .addCase(deleteWineById.rejected, (state, action) => {
        state.wines.loading = false;
        state.wines.error = action.payload;
      })
      .addCase(updateWine.pending, (state) => {
        state.wines.loading = true;
      })
      .addCase(updateWine.fulfilled, (state) => {
        state.wines.loading = false;
      })
      .addCase(updateWine.rejected, (state) => {
        state.wines.loading = false;
      });
  },
});

export const winesReducer = slice.reducer;
