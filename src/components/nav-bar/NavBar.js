import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

//components
import Button from "../shared/button/Button";
import Link from "../shared/link/Link";

//react icons
import {
  FaBars,
  FaShoppingCart,
  FaShoppingBag,
  FaTimes,
  FaUserCircle,
} from "react-icons/fa";

//redux
import { useDispatch, useSelector } from "react-redux";

//styles
import styles from "./NavBar.module.scss";

//thunks
import { logout } from "../../redux/thunks/authThunk";

const NavBar = () => {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.cart.getShopCart);
  const { user } = useSelector((state) => state.auth);
  const { windowSize } = useSelector((state) => state.window);
  const wish = useSelector((state) => state.cart.getWishCart);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showLinks, setShowLinks] = useState(false);

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
    dispatch(logout());
  };

  useEffect(() => {
    if (windowSize > 540) {
      setShowLinks(false);
    }
  }, [windowSize]);

  return (
    <nav className={styles.container}>
      <NavLink className={styles.title} to={"/"}>
        Bop Shop
      </NavLink>
      {windowSize <= 540 && (
        <Button buttonHandler={showLinkHandler} background={"secondary"}>
          {showLinks ? <FaTimes /> : <FaBars />}
        </Button>
      )}
      <ul
        className={`${
          windowSize > 540 ? styles.desktopView : styles.mobileView
        } ${showLinks ? styles.open : styles.close}`}
      >
        <li className={styles.navLink}>
          <Link colorPrimary={true} path={"/cart"}>
            <FaShoppingCart /> Cart{" "}
            {shop?.length > 0 && user.token && (
              <span className={styles.badge}>{shop.length}</span>
            )}
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
            <FaUserCircle /> {user.name ? user.name : "Profile"}
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
                Wish List{" "}
                {wish?.length > 0 && user.token && (
                  <span className={styles.badge}>{wish.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </li>
        {!user.token && (
          <li className={styles.navLink}>
            <Link colorPrimary={true} path={"/login"}>
              Login
            </Link>
          </li>
        )}
        {user.token && (
          <li className={styles.navLink}>
            <Button background={"secondary"} buttonHandler={signOutHandler}>
              Sign-out
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
