import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, clearAuthHeader, setAuthHeader } from "../../services/api";

export const signupThunk = createAsyncThunk(
  "auth/signup",
  async (body, thunkAPI) => {
    try {
      const { data } = await api.post("/auth/signup", body);
      setAuthHeader(data.token);
      console.log("signup", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signinThunk = createAsyncThunk(
  "auth/signin",
  async (body, thunkAPI) => {
    try {
      const response = await api.post("/auth/signin", body);
      const { accessToken, user } = response.data;

      setAuthHeader(accessToken);

      const normalizedUser = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        favorites: user.favorites,
      };

      return { token: accessToken, user: normalizedUser };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchFavorites = createAsyncThunk(
  "auth/fetchFavorites",
  async (__, thunkAPI) => {
    try {
      const { data } = await api.get("/auth/favorites");
      return data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addFavoriteById = createAsyncThunk(
  "auth/addFavoriteById",
  async (id, thunkApi) => {
    try {
      await api.post(`/auth/favorites/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteById = createAsyncThunk(
  "auth/deleteFavoriteById",
  async (id, thunkApi) => {
    try {
      await api.delete(`/auth/favorites/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    try {
      const response = await api.post("/auth/refresh");
      const newToken = response.data?.accessToken;

      if (!newToken) {
        return thunkAPI.rejectWithValue("No accessToken in refresh response");
      }

      setAuthHeader(newToken);
      return { token: newToken };
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signoutThunk = createAsyncThunk(
  "auth/signout",
  async (__, thunkAPI) => {
    try {
      await api.post("/auth/signout");
      clearAuthHeader();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getGoogleOAuthLinkThunk = createAsyncThunk(
  "auth/google/getLink",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await api.post("/auth/get-google-oauth-link");
      // бекенд повертає { status, message, data: { link } }
      console.log(data.data.link);
      return data.data.link;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const signinWithGoogleThunk = createAsyncThunk(
  "auth/google/signin",
  async ({ code }, { rejectWithValue }) => {
    try {
      const response = await api.post("/auth/signin-with-google", {
        code,
      });
      const { accessToken, user } = response.data.data;

      setAuthHeader(accessToken);

      const normalizedUser = {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        favorites: user.favorites,
      };
      console.log(accessToken);
      console.log(user);
      return { token: accessToken, user: normalizedUser };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const signinThunk = createAsyncThunk(
//   "auth/signin",
//   async (body, thunkAPI) => {
//     try {
//       const response = await api.post("/auth/signin", body);
//       const { accessToken, user } = response.data;

//       setAuthHeader(accessToken);

//       const normalizedUser = {
//         id: user._id,
//         username: user.username,
//         email: user.email,
//         role: user.role,
//         favorites: user.favorites,
//       };

//       return { token: accessToken, user: normalizedUser };
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
