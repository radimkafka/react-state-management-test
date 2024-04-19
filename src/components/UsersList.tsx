import UserDetail from "./UserDetail";
import { User } from "../types";

type Props = { users: User[]; onDelete?: (id: number) => void; onChange?: (id: number) => void };

const UsersList = ({ users, onChange, onDelete }: Props) => {
  console.log("UsersList");
  return (
    <div>
      {users.map(user => (
        <UserDetail key={user.id} data={user} onDelete={onDelete} onChange={onChange} />
      ))}
    </div>
  );
};

export default UsersList;
