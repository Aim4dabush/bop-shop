import { NavLink } from "react-router-dom";

//styles
import styles from "./Link.module.scss";

const Link = ({ classStyle, path, children }) => {
  return (
    <NavLink
      className={`${classStyle === "button" ? styles.btn : styles.link}`}
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default Link;
