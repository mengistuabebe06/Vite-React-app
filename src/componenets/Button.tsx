import React from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger";
  onClick: () => void;
}
function Button({ children, onClick, color }: Props) {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
