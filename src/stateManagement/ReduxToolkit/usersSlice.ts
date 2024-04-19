import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../types";
import { users, deleteUser as deleteUserFn, changeUser as changeUserFn } from "../../data";

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
      state.data = deleteUserFn(state.data, action.payload);
    },
    changeUser: (state, action: PayloadAction<number>) => {
      state.data = changeUserFn(state.data, action.payload);
    },
  },
});

export const { deleteUser, changeUser } = usersSlice.actions;

export default usersSlice.reducer;
