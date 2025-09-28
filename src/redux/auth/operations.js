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
