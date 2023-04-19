import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//react icons
import {
  FaBars,
  FaShoppingCart,
  FaShoppingBag,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

//components
import Button from "../shared/button/Button";
import Link from "../shared/link/Link";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [windowSize, setWindowSize] = useState(0);

  const mouseEnter = () => {
    setShowProfileOptions(true);
  };
  const mouseLeave = () => {
    setShowProfileOptions(false);
  };
  const showLinkHandler = () => {
    setShowLinks((prev) => (prev = !prev));
  };
  const showProfileOptionsHandler = () => {
    setShowProfileOptions((prev) => (prev = !prev));
  };
  const signOutHandler = () => {
    console.log("Sign out successful!");
  };

  useEffect(() => {
    const resizeHandler = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    resizeHandler();

    if (windowSize > 540) {
      setShowLinks(false);
    }

    return () => window.removeEventListener("resize", resizeHandler);
  }, [windowSize]);

  return (
    <nav className={styles.container}>
      <NavLink className={styles.title} to={"/"}>
        Bop Shop
      </NavLink>
      {windowSize <= 540 && (
        <Button buttonHandler={showLinkHandler} colorPrimary={true}>
          {showLinks ? <FaTimes /> : <FaBars />}
        </Button>
      )}
      <ul
        className={`${
          windowSize > 540 ? styles.desktopView : styles.mobileView
        }`}
      >
        <li className={styles.navLink}>
          <Link colorPrimary={true} path={"/cart"}>
            <FaShoppingCart /> Cart
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link colorPrimary={true} path={"/checkout"}>
            <FaShoppingBag />
            Checkout
          </Link>
        </li>
        <li
          className={styles.profile}
          style={{ overflow: showProfileOptions ? "visible" : "hidden" }}
        >
          <p onClick={showProfileOptionsHandler} onMouseEnter={mouseEnter}>
            <FaUserCircle /> Profile
          </p>
          <ul
            className={`${styles.profileLinks} ${
              showProfileOptions ? styles.show : styles.hide
            }`}
            onMouseLeave={mouseLeave}
          >
            <li className={styles.profileLink}>
              <Link colorPrimary={true} path={"/profile"}>
                Dashboard
              </Link>
            </li>
            <li className={styles.profileLink}>
              <Link colorPrimary={true} path={"/profile/history"}>
                Order History
              </Link>
            </li>
            <li className={styles.profileLink}>
              <Link colorPrimary={true} path={"/profile/wish-list"}>
                Wish List
              </Link>
            </li>
          </ul>
        </li>
        <li className={styles.navLink}>
          <Link colorPrimary={true} path={"/login"}>
            Login
          </Link>
        </li>
        <li className={styles.navLink}>
          <Button colorPrimary={true} buttonHandler={signOutHandler}>
            Sign-out
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;