import { atom } from "jotai";
import { users } from "../../data";

export const usersAtom = atom(users);
export const userCountAtom = atom(get => get(usersAtom).length);
