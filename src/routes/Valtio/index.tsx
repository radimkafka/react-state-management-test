import { createFileRoute } from "@tanstack/react-router";
import { useSnapshot } from "valtio/react";
import UserCount from "../../components/UserCount";
import { changeUser, deleteUser, usersStore } from "../../stateManagement/Valtio/usersStore";
import UsersList from "../../components/UsersList";
import { User } from "../../types";

export const Route = createFileRoute("/Valtio/")({
  component: Valtio,
});

function Valtio() {
  return (
    <>
      <UserCountComponent />
      <Component />
    </>
  );
}

function Component() {
  const users = useSnapshot(usersStore).data;

  return <UsersList users={users as User[]} onDelete={id => deleteUser(id)} onChange={id => changeUser(id)} />;
}

function UserCountComponent() {
  const count = useSnapshot(usersStore).data;
  return <UserCount count={count.length} />;
}
