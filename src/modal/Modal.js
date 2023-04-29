import { Fragment } from "react";
import ReactDOM from "react-dom";

//components
import Notification from "./notification/Notification";

//redux
import { useSelector } from "react-redux";

const Modal = () => {
  const { show, status, message } = useSelector(
    (state) => state.notification.info
  );
  return (
    <Fragment>
      {show &&
        ReactDOM.createPortal(
          <Notification message={message} show={show} status={status} />,
          document.getElementById("notification")
        )}
    </Fragment>
  );
};

export default Modal;
