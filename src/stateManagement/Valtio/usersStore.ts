import { proxy } from "valtio";
import { users, deleteUser as deleteUserFn, changeUser as changeUserFn } from "../../data";

export const usersStore = proxy({ data: users });

export const changeUser = (id: number) => {
  usersStore.data = changeUserFn(usersStore.data, id);
};

export const deleteUser = (id: number) => {
  usersStore.data = deleteUserFn(usersStore.data, id);
};
