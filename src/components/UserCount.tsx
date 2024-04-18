type Props = { count: number };

const UserCount = ({ count }: Props) => (
  <div className="flex gap-2">
    <div>User count:</div>

    <div className="text-blue-700 font-bold">{count}</div>
  </div>
);

export default UserCount;
