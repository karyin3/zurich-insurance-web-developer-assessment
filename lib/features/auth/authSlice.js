import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: "",
      email: "",
      image: "",
    },
    
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.user = {...state.user, ...action.payload };
    }
  }
});

export const { setAuthUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
