import { createSlice } from "@reduxjs/toolkit";
import { deleteWineById, fetchWines } from "./operations";

const initialState = {
  wines: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: "wines",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchWines.fulfilled, (state, action) => {
        state.wines.items = action.payload;
        state.wines.loading = false;
      })
      .addCase(fetchWines.pending, (state) => {
        state.wines.loading = true;
      })
      .addCase(fetchWines.rejected, (state, action) => {
        state.wines.loading = false;
        state.wines.error = action.payload;
      })
      .addCase(deleteWineById.fulfilled, (state, action) => {
        state.wines.items = state.wines.items.filter(
          (wine) => wine._id !== action.payload
        );
      })
      .addCase(deleteWineById.pending, (state) => {
        state.wines.loading = true;
      })
      .addCase(deleteWineById.rejected, (state, action) => {
        state.wines.loading = false;
        state.wines.error = action.payload;
      });
  },
});

export const winesReducer = slice.reducer;
