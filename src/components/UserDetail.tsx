import { User } from "../types";
import ChangeButton from "./ChangeButton";
import DeleteButton from "./DeleteButton";

type Props = { data: User; onDelete?: (id: number) => void; onChange?: (id: number) => void };

const UserDetail = ({ data, onDelete, onChange }: Props) => {
  return (
    <div className="flex gap-2 px-2 py-1">
      <div className="basis-10">{data.id}</div>
      <div className="basis-20">{data.name}</div>
      <div className="basis-60">{data.email}</div>
      {onChange && <ChangeButton className="basis-10" onClick={_ => onChange(data.id)} />}
      {onDelete && <DeleteButton className="basis-10" onClick={_ => onDelete(data.id)} />}
    </div>
  );
};

export default UserDetail;
