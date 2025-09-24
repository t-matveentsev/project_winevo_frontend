import { createSlice } from "@reduxjs/toolkit";
import { deleteVarietalById, fetchVarietals } from "./operations";

const initialState = {
  varietals: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: "varietals",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchVarietals.fulfilled, (state, action) => {
        state.varietals.items = action.payload;
        state.varietals.loading = false;
      })
      .addCase(fetchVarietals.pending, (state) => {
        state.varietals.loading = true;
      })
      .addCase(fetchVarietals.rejected, (state, action) => {
        state.varietals.loading = false;
        state.varietals.error = action.payload;
      })
      .addCase(deleteVarietalById.fulfilled, (state, action) => {
        state.varietals.items = state.varietals.items.filter(
          (varietal) => varietal._id !== action.payload
        );
      })
      .addCase(deleteVarietalById.pending, (state) => {
        state.varietals.loading = true;
      })
      .addCase(deleteVarietalById.rejected, (state, action) => {
        state.varietals.loading = false;
        state.varietals.error = action.payload;
      });
  },
});

export const varietalsReducer = slice.reducer;
