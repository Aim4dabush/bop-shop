import { NavLink } from "react-router-dom";

//styles
import styles from "./Link.module.scss";

const Link = ({ path, children }) => {
  return (
    <NavLink className={styles.link} to={path}>
      {children}
    </NavLink>
  );
};

export default Link;
