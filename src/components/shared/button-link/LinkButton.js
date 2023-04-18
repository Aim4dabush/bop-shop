import { NavLink } from "react-router-dom";

//styles
import styles from "./LinkButton.module.scss";

const LinkButton = ({ children, path }) => {
  return (
    <NavLink className={styles.btn} to={path}>
      {children}
    </NavLink>
  );
};

export default LinkButton;
