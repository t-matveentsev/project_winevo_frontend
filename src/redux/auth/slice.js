import { createSlice } from "@reduxjs/toolkit";
import { signinThunk, signoutThunk, signupThunk } from "./operations";

const initialState = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  isRefreshing: false,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(signupThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(signupThunk.pending, (state) => {
        state.loading = true;
        state.isLoggedIn = false;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.loading = true;
        state.isLoggedIn = false;
        state.error = action.payload;
      })
      .addCase(signinThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(signoutThunk.fulfilled, () => initialState);
  },
});

export const authReducer = slice.reducer;
