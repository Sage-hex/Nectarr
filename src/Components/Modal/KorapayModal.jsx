import React from "react";
import "./KorapayModal.css"

const Modal = ({ show, handleClose, children }) => {
  return (
    <>
      {show ? (
        <div className="modal-backdrop">
          <div className="modal-content">
            <button className="modal-close" onClick={handleClose}>
              &times;
            </button>
            <div className="modal-body">{children}</div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
