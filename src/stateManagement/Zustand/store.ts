import { create } from "zustand";
import { changeUserMail, users } from "../../data";
import { User } from "../../types";

interface UserState {
  data: User[];
  deleteUser: (id: number) => void;
  changeUser: (id: number) => void;
}

export const useUserStore = create<UserState>(set => ({
  data: users,

  deleteUser: (id: number) => {
    set(state => ({ data: state.data.filter(user => user.id !== id) }));
  },
  changeUser: (id: number) => {
    set(state => ({ data: state.data.map(user => (user.id !== id ? user : changeUserMail(user))) }));
  },
}));
