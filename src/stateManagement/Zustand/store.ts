import { create } from "zustand";
import { changeUser, deleteUser, users } from "../../data";
import { User } from "../../types";

interface UserState {
  data: User[];
  deleteUser: (id: number) => void;
  changeUser: (id: number) => void;
}

export const useUserStore = create<UserState>(set => ({
  data: users,

  deleteUser: (id: number) => {
    set(state => ({ data: deleteUser(state.data, id) }));
  },
  changeUser: (id: number) => {
    set(state => ({ data: changeUser(state.data, id) }));
  },
}));
