import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const fetchTypes = createAsyncThunk(
  "types/fetchTypes",
  async (__, thunkApi) => {
    try {
      const { data } = await api.get("/types");
      return data.data.items;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteTypeById = createAsyncThunk(
  "types/deleteById",
  async (id, thunkApi) => {
    try {
      await api.delete(`/types/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
