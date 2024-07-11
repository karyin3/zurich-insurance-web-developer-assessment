import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/authSlice";

export const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      auth: authReducer
    },
    preloadedState
  })
}
