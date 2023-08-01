import React, { ReactNode } from "react";

interface Props {
  // text: string change this to childern
  children: ReactNode;
  onClose: () => void;
}
function Alert({ children ,onClose}: Props) {
  return (
    <div className="alert alert-primary alert-dismissible fade show">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
}

export default Alert;
