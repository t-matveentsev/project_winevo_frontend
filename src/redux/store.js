import { configureStore } from "@reduxjs/toolkit";
import { winesReducer } from "./wines/slice";
import { typesReducer } from "./type/slice";
import { varietalsReducer } from "./varietal/slice";
import { authReducer } from "./auth/slice";

export const store = configureStore({
  reducer: {
    wines: winesReducer,
    types: typesReducer,
    varietals: varietalsReducer,
    auth: authReducer,
  },
});
