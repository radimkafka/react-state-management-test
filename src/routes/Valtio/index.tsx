import { createFileRoute } from "@tanstack/react-router";
import { useSnapshot } from "valtio";
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
  const users = useSnapshot(usersStore);
  console.log(users.data);
  return <UsersList users={users.data as User[]} onDelete={id => deleteUser(id)} onChange={id => changeUser(id)} />;
}

function UserCountComponent() {
  const count = useSnapshot(usersStore);
  const users = usersStore.data;
  console.log(count.data);

  return (
    <>
      {users[0]?.email}
      <UserCount count={count.data.length} />;
    </>
  );
}
