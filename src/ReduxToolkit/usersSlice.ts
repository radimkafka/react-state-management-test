import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";
import { changeUserMail, users } from "../data";

export interface UsersState {
  data: User[];
}

const initialState: UsersState = {
  data: users,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    deleteUser: (state, action: PayloadAction<number>) => {
      state.data = state.data.filter(user => user.id !== action.payload);
    },
    changeUser: (state, action: PayloadAction<number>) => {
      state.data = state.data.map(user => (user.id !== action.payload ? user : changeUserMail(user)));
    },
  },
});

export const { deleteUser, changeUser } = usersSlice.actions;

export default usersSlice.reducer;
