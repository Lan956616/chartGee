import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "firebase/auth";

type InitialState = {
  currentUser: null | User | "123";
};
const initialState: InitialState = {
  currentUser: "123",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
