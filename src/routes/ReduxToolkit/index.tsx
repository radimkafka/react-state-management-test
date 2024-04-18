import { createFileRoute } from "@tanstack/react-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../ReduxToolkit/store";
import UserDetail from "../../components/UserDetail";
import { deleteUser } from "../../ReduxToolkit/usersSlice";
import UserCount from "../../components/UserCount";

export const Route = createFileRoute("/ReduxToolkit/")({
  component: ReduxToolkit,
});

function ReduxToolkit() {
  return (
    <Provider store={store}>
      <UserCountComponent />
      <Component />
    </Provider>
  );
}

function Component() {
  const users = useSelector((state: RootState) => state.users.data);
  const dispatch = useDispatch();

  return (
    <div>
      {users.map(user => (
        <UserDetail key={user.id} data={user} onDelete={id => dispatch(deleteUser(id))} />
      ))}
    </div>
  );
}

function UserCountComponent() {
  const count = useSelector((state: RootState) => state.users.data.length);
  return <UserCount count={count} />;
}
