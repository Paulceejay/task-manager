import ReactDOM from "react-dom";

const Backdrop = ({onClick}) => {
  return (
    <div
      className="w-full h-full fixed z-30 bg-[#000000BF] overflow-scroll"
      onClick={onClick}
    ></div>
  );
};

const ModalOverlay = ({children}) => {
  return (
    <div className="fixed top-10 left-[5%] z-50 w-11/12 p-4 rounded-2xl bg-white animate-slidDown sm:w-1/2 sm:left-[25%]">
      <div>{children}</div>
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = ({children, onClose}) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClick={onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
