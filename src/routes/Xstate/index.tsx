import { createFileRoute } from "@tanstack/react-router";
import UsersList from "../../components/UsersList";
import UserCount from "../../components/UserCount";
import { useActor, useSelector } from "@xstate/react";
import { usersActor, usersMachine } from "../../stateManagement/Xstate/usersMachine";

export const Route = createFileRoute("/Xstate/")({
  component: Xstate,
});

function Xstate() {
  return (
    <>
      <UserCountComponent />
      <Component />
    </>
  );
}

function Component() {
  const [state, send] = useActor(usersMachine);

  return (
    <UsersList
      users={state.context.users}
      onDelete={id => send({ type: "DELETE_USER", id })}
      onChange={id => send({ type: "CHANGE_USER", id })}
    />
  );
}

function UserCountComponent() {
  const users = useSelector(usersActor, state => state.context.users);
  return (
    <>
      {users[0].email}
      <UserCount count={users.length} />
    </>
  );
}
