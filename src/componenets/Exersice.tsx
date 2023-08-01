import React from "react";

interface Props {
  children: string;
  color?: "primary" | "danger" | "secondary";
  onClick: () => void;
}
function Exersice({ children, color, onClick }: Props) {
  return (
    <>
      <button onClick={onClick} className={"btn btn-" + { color }}>
        {children}
      </button>
    </>
  );
}

export default Exersice;
