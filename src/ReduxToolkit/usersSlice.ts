import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../types";
import { users } from "../data";

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
  },
});

export const { deleteUser } = usersSlice.actions;

export default usersSlice.reducer;
