import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  currentUser: null | string;
  isAuthLoading: boolean;
};
const initialState: InitialState = {
  currentUser: null,
  isAuthLoading: true,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.currentUser = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = null;
    },
    setAuthDone: (state) => {
      state.isAuthLoading = false;
    },
  },
});

export const { setUser, clearUser, setAuthDone } = authSlice.actions;
export default authSlice.reducer;
