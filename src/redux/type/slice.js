import { createSlice } from "@reduxjs/toolkit";
import { deleteTypeById, fetchTypes } from "./operations";

const initialState = {
  types: {
    items: [],
    loading: false,
    error: null,
  },
};

const slice = createSlice({
  name: "types",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchTypes.fulfilled, (state, action) => {
        state.types.items = action.payload;
        state.types.loading = false;
      })
      .addCase(fetchTypes.pending, (state) => {
        state.types.loading = true;
      })
      .addCase(fetchTypes.rejected, (state, action) => {
        state.types.loading = false;
        state.types.error = action.payload;
      })
      .addCase(deleteTypeById.fulfilled, (state, action) => {
        state.types.items = state.types.items.filter(
          (type) => type._id !== action.payload
        );
      })
      .addCase(deleteTypeById.pending, (state) => {
        state.types.loading = true;
      })
      .addCase(deleteTypeById.rejected, (state, action) => {
        state.types.loading = false;
        state.types.error = action.payload;
      });
  },
});

export const typesReducer = slice.reducer;
