import { assign, createActor, createMachine } from "xstate";
import { changeUser, deleteUser, users } from "../../data";

export const usersMachine = createMachine({
  context: {
    users: users,
  },
  on: {
    DELETE_USER: {
      actions: assign({
        users: ({ context, event }) => {
          return deleteUser(context.users, event.id);
        },
      }),
    },
    CHANGE_USER: {
      actions: assign({
        users: ({ context, event }) => {
          return changeUser(context.users, event.id);
        },
      }),
    },
  },
});

export const usersActor = createActor(usersMachine);
usersActor.start();
