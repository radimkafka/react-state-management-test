type Props = { onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; className?: string };

const DeleteButton = ({ onClick, className }: Props) => (
  <button onClick={onClick} className={`bg-red-500 hover:bg-red-700 text-white font-bold p-1 rounded ${className}`}>
    Delete
  </button>
);
export default DeleteButton;
