import { createFileRoute } from "@tanstack/react-router";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";
import { userCountState, usersState } from "../../stateManagement/Recoil/usersState";
import UserDetail from "../../components/UserDetail";
import { changeUser, deleteUser } from "../../data";
import UserCount from "../../components/UserCount";

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
  const count = useRecoilValue(userCountState);
  return <UserCount count={count} />;
}
