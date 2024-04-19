import { createFileRoute } from "@tanstack/react-router";
import { useAtom, useAtomValue } from "jotai";
import { userCountAtom, usersAtom } from "../../stateManagement/Jotai/usersAtom";
import UserDetail from "../../components/UserDetail";
import UserCount from "../../components/UserCount";
import { changeUser, deleteUser } from "../../data";

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
        <UserDetail
          key={user.id}
          data={user}
          onDelete={id => setUsers(deleteUser(users, id))}
          onChange={id => setUsers(changeUser(users, id))}
        />
      ))}
    </div>
  );
}

function UserCountComponent() {
  console.log("UserCountComponent");
  const count = useAtomValue(userCountAtom);
  return <UserCount count={count} />;
}
