import { NavLink } from "react-router-dom";

//styles
import styles from "./ButtonLink.module.scss";

const ButtonLink = ({ children, path }) => {
  return (
    <NavLink className={styles.btn} to={path}>
      {children}
    </NavLink>
  );
};

export default ButtonLink;
