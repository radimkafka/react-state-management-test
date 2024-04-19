import { createFileRoute } from "@tanstack/react-router";
import { useAtom, useAtomValue } from "jotai";
import { userCountAtom, usersAtom } from "../../stateManagement/Jotai/usersAtom";
import UserCount from "../../components/UserCount";
import { changeUser, deleteUser } from "../../data";
import UsersList from "../../components/UsersList";

export const Route = createFileRoute("/Jotai/")({
  component: Jotai,
});

function Jotai() {
  return (
    <>
      <UserCountComponent />
      <Component />
    </>
  );
}

function Component() {
  const [users, setUsers] = useAtom(usersAtom);

  return (
    <UsersList
      users={users}
      onDelete={id => setUsers(deleteUser(users, id))}
      onChange={id => setUsers(changeUser(users, id))}
    />
  );
}

function UserCountComponent() {
  const count = useAtomValue(userCountAtom);
  return <UserCount count={count} />;
}
