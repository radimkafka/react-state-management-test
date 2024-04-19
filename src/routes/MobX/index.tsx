import { createFileRoute } from "@tanstack/react-router";
import { observer } from "mobx-react-lite";
import { UserObservable } from "../../stateManagement/Mobx/UserObservable";
import UsersList from "../../components/UsersList";

export const Route = createFileRoute("/MobX/")({
  component: MobX,
});

const myUsers = new UserObservable();
function MobX() {
  return (
    <div>
      <ObserverComponent data={myUsers} />
    </div>
  );
}

const Component = ({ data: { data, changeUser, deleteUser } }: { data: UserObservable }) => {
  console.log("Component");

  return <UsersList users={data} onDelete={id => deleteUser(id)} onChange={id => changeUser(id)} />;
};
const ObserverComponent = observer(Component);

// function UserCountComponent() {
//   console.log("UserCountComponent");
//   const count = useUserStore(state => state.data.length);
//   return <UserCount count={count} />;
// }
