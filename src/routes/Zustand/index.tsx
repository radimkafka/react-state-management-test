import { createFileRoute } from "@tanstack/react-router";
import UserCount from "../../components/UserCount";
import { useUserStore } from "../../stateManagement/Zustand/store";
import UsersList from "../../components/UsersList";

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

  return <UsersList users={users} onDelete={id => deleteUser(id)} onChange={id => changeUser(id)} />;
}

function UserCountComponent() {
  const count = useUserStore(state => state.data.length);
  return <UserCount count={count} />;
}
