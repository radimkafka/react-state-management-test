import { atom, selector } from "recoil";
import { users } from "../../data";

export const usersState = atom({
  key: "usersState",
  default: users,
});

export const userCountState = selector({
  key: "userCountState",
  get: ({ get }) => get(usersState).length,
});
