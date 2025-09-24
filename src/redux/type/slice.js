import { createSlice } from "@reduxjs/toolkit";
import { deleteTypeById, fetchTypes } from "./operations";

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "types",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchTypes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(deleteTypeById.fulfilled, (state, action) => {
        state.items = state.items.filter((type) => type._id !== action.payload);
      })
      .addCase(deleteTypeById.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteTypeById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const typesReducer = slice.reducer;
