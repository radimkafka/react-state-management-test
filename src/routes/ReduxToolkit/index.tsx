import { createFileRoute } from "@tanstack/react-router";
import { Provider, useDispatch, useSelector } from "react-redux";
import { RootState, store } from "../../stateManagement/ReduxToolkit/store";
import { changeUser, deleteUser } from "../../stateManagement/ReduxToolkit/usersSlice";
import UserCount from "../../components/UserCount";
import UsersList from "../../components/UsersList";

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
    <UsersList users={users} onDelete={id => dispatch(deleteUser(id))} onChange={id => dispatch(changeUser(id))} />
  );
}

function UserCountComponent() {
  const count = useSelector((state: RootState) => state.users.data.length);
  return <UserCount count={count} />;
}
