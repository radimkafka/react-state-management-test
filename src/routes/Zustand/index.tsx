import { createFileRoute } from "@tanstack/react-router";
import UserDetail from "../../components/UserDetail";
import UserCount from "../../components/UserCount";
import { useUserStore } from "../../stateManagement/Zustand/store";

export const Route = createFileRoute("/Zustand/")({
  component: Zustand,
});

function Zustand() {
  return (
    <>
      <UserCountComponent />
      <Component />
    </>
  );
}

function Component() {
  console.log("Component");
  const { changeUser, data: users, deleteUser } = useUserStore();

  return (
    <div>
      {users.map(user => (
        <UserDetail key={user.id} data={user} onDelete={id => deleteUser(id)} onChange={id => changeUser(id)} />
      ))}
    </div>
  );
}

function UserCountComponent() {
  console.log("UserCountComponent");
  const count = useUserStore(state => state.data.length);
  return <UserCount count={count} />;
}
