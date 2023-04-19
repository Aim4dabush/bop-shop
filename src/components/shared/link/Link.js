import { NavLink } from "react-router-dom";

//styles
import styles from "./Link.module.scss";

const Link = ({ children, colorPrimary, path }) => {
  return (
    <NavLink
      className={`${colorPrimary ? styles.linkPrimary : styles.linkSecondary}`}
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default Link;
