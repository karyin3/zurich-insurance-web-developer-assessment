import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/auth/authSlice";
import { usersReducer } from "./features/users/usersSlice";

export const makeStore = (preloadedState = {}) => {
  return configureStore({
    reducer: {
      auth: authReducer,
      users: usersReducer
    },
    preloadedState
  });
};
