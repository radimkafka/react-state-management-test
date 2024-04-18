import { createFileRoute } from "@tanstack/react-router";
import { useAtom, useAtomValue } from "jotai";
import { usersAtom } from "../../stateManagement/Jotai/usersAtom";
import UserDetail from "../../components/UserDetail";
import UserCount from "../../components/UserCount";

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
  console.log("Component");
  const [users, setUsers] = useAtom(usersAtom);

  return (
    <div>
      {users.map(user => (
        <UserDetail key={user.id} data={user} /*onDelete={id => deleteUser(id)} onChange={id => changeUser(id)}*/ />
      ))}
    </div>
  );
}

function UserCountComponent() {
  console.log("UserCountComponent");
  const users = useAtomValue(usersAtom);
  return <UserCount count={users.length} />;
}
