import { NavLink } from "react-router-dom";

//styles
import styles from "./Link.module.scss";

const Link = ({ children, colorPrimary, padding, path }) => {
  return (
    <NavLink
      className={`${
        colorPrimary ? styles.linkPrimary : styles.linkSecondary
      }  ${padding ? styles.pad : styles.noPad}`}
      to={path}
    >
      {children}
    </NavLink>
  );
};

export default Link;
