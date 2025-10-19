import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../services/api";

export const fetchVarietals = createAsyncThunk(
  "varietal/fetchVarietal",
  async (__, thunkApi) => {
    try {
      const { data } = await api.get("/varietals");
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const createVarietal = createAsyncThunk(
  "varietal/createVarietal",
  async (newVarietal, thunkApi) => {
    try {
      const { data } = await api.post(`/varietals`, newVarietal);
      return data.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const deleteVarietalById = createAsyncThunk(
  "varietal/deleteById",
  async (id, thunkApi) => {
    try {
      await api.delete(`/varietals/${id}`);
      return id;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
