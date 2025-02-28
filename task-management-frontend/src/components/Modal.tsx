import React from "react";
import "../styles/Modal.css";
const Modal: React.FC<{ message: string }> = ({ message }) => {
  return <div className="modal">{message}</div>;
};

export default Modal;
