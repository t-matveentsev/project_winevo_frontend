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
