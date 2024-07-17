import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: [],
  reducers: {
    setUsers: (state, action) => action.payload,
    toggleEmailVisibilityByUserId: (state, action) => {
      return state.map(user => {
        if (user.id === action.payload) {
          return {
            ...user,
            showEmail: !user.showEmail
          };
        } else {
          return user;
        }
      });
    }
  }
});

export const { setUsers, toggleEmailVisibilityByUserId } = usersSlice.actions;
export const usersReducer = usersSlice.reducer;
