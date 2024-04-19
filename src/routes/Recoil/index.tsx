import { createFileRoute } from "@tanstack/react-router";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { userCountState, usersState } from "../../stateManagement/Recoil/usersState";
import { changeUser, deleteUser } from "../../data";
import UserCount from "../../components/UserCount";
import UsersList from "../../components/UsersList";

export const Route = createFileRoute("/Recoil/")({
  component: Recoil,
});

function Recoil() {
  return (
    <RecoilRoot>
      <UserCountComponent />
      <Component />
    </RecoilRoot>
  );
}

function Component() {
  console.log("Component");
  const [users, setUsers] = useRecoilState(usersState);

  return (
    <UsersList
      users={users}
      onDelete={id => setUsers(deleteUser(users, id))}
      onChange={id => setUsers(changeUser(users, id))}
    />
  );
}

function UserCountComponent() {
  const count = useRecoilValue(userCountState);
  return <UserCount count={count} />;
}
