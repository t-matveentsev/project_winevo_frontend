import { createSlice } from "@reduxjs/toolkit";
import {
  addFavoriteById,
  deleteFavoriteById,
  fetchFavorites,
  refreshThunk,
  signinThunk,
  signinWithGoogleThunk,
  signoutThunk,
  signupThunk,
} from "./operations";

const initialState = {
  user: {
    username: "",
    email: "",
    role: "",
    favorites: [],
    favoriteIds: [],
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

        const favorites = action.payload.user?.favorites || [];
        state.user.favoriteIds = favorites.map(String);
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
        state.user.favoriteIds = action.payload.map((w) => w._id);
        state.loading = false;
      })
      .addCase(fetchFavorites.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(addFavoriteById.pending, (state) => {
        state.error = null;
      })
      .addCase(addFavoriteById.fulfilled, (state, action) => {
        const id = action.payload;
        if (!state.user.favoriteIds.includes(id)) {
          state.user.favoriteIds.push(id);
        }
      })
      .addCase(addFavoriteById.rejected, (state, action) => {
        state.error = action.payload;
      })

      .addCase(deleteFavoriteById.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteFavoriteById.fulfilled, (state, action) => {
        const id = action.payload;
        state.user.favoriteIds = state.user.favoriteIds.filter((x) => x !== id);
        state.user.favorites = state.user.favorites.filter((w) => w._id !== id);
      })
      .addCase(deleteFavoriteById.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(signinWithGoogleThunk.fulfilled, (state, action) => {
        state.isLoggedIn = true;
        state.accessToken = action.payload?.accessToken ?? null;
        console.log(state.accessToken);
      });
  },
});

export const authReducer = slice.reducer;
