import React from "react";
import ReactDOM from "react-dom";
import WithLineNumbers from "./codeHandler";

function Modal({ setModal, code, lng }) {
  const modal = document.getElementById("modal");
  return ReactDOM.createPortal(
    <div className="modal-wrapper" onClick={() => setModal(false)}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-content">
            <WithLineNumbers exampleCode={code} lng={lng}/>
        </div>
      </div>
    </div>,
    modal
  );
}

export default Modal;
