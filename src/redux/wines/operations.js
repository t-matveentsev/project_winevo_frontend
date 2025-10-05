import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const fetchWines = createAsyncThunk(
  "wines/fetchWines",
  async (__, thunkApi) => {
    try {
      const { data } = await api.get("/wines");
      return data.data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getWineById = createAsyncThunk(
  "wines/getWineById",
  async (id, thunkApi) => {
    try {
      const { data } = await api.get(`/wines/${id}`);
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteWineById = createAsyncThunk(
  "wines/deleteById",
  async (id, thunkApi) => {
    try {
      await api.delete(`/wines/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createWine = createAsyncThunk(
  "wines/createWine",
  async (wine, thunkAPI) => {
    try {
      const response = await api.post("/wines", wine, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({
        message: error.response?.data?.message || error.message,
        status: error.response?.status,
      });
    }
  }
);
