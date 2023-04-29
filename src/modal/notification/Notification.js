//actions
import { notificationActions } from "../../redux/slices/notificationSlice";

//components
import Button from "../../components/shared/button/Button";

//react-icons
import { FaWindowClose } from "react-icons/fa";

//redux
import { useDispatch } from "react-redux";

//styles
import styles from "./Notification.module.scss";

const Notification = ({ message, show, status }) => {
  const dispatch = useDispatch();

  const notificationHandler = () => {
    dispatch(notificationActions.setInfoReset());
  };

  return (
    <div
      className={`${styles.card} ${
        (status === "Success" && styles.success) ||
        (status === "Error" && styles.error) ||
        (status === "Logout" && styles.logout)
      } ${show ? styles.display : styles.hide}`}
    >
      <div className={styles.titleWrapper}>
        <h3>{status}</h3>
      </div>
      <div className={styles.contentWrapper}>
        <p>{message}</p>
        <Button
          background={
            (status === "Success" && "success") ||
            (status === "Error" && "danger") ||
            (status === "Logout" && "secondary")
          }
          buttonHandler={notificationHandler}
        >
          <FaWindowClose />
        </Button>
      </div>
    </div>
  );
};

export default Notification;
