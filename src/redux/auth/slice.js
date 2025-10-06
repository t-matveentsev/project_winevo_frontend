import { createSlice } from "@reduxjs/toolkit";
import {
  fetchFavorites,
  refreshThunk,
  signinThunk,
  signoutThunk,
  signupThunk,
} from "./operations";

const initialState = {
  user: {
    username: "",
    email: "",
    role: "",
    favorites: [],
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
        state.error = null;
      })
      .addCase(signupThunk.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      })

      .addCase(signinThunk.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(signinThunk.pending, (state) => {
        state.loading = true;
        state.isLoggedIn = false;
        state.error = null;
      })
      .addCase(signinThunk.rejected, (state, action) => {
        state.loading = false;
        state.isLoggedIn = false;
        state.error = action.payload;
      })

      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.loading = false;
        state.error = null;
      })
      .addCase(refreshThunk.rejected, (state, action) => {
        state.token = "";
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(signoutThunk.fulfilled, () => initialState)

      .addCase(fetchFavorites.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.user.favorites = action.payload;
        state.loading = false;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const authReducer = slice.reducer;
