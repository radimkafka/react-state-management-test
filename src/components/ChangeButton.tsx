import React from "react";

type Props = { onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void; className?: string };

const DeleteButton = ({ onClick, className }: Props) => (
  <button onClick={onClick} className={`bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded ${className}`}>
    Edit
  </button>
);
export default DeleteButton;
