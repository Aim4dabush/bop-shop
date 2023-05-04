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

//services
import { logout } from "../../firebase/services/auth-service";

//styles
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cart.ShopCart);
  const { user } = useSelector((state) => state.auth);
  const wishList = useSelector((state) => state.cart.WishCart);
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const [showLinks, setShowLinks] = useState(false);
  const [windowSize, setWindowSize] = useState();

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
    const resizeHandler = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", resizeHandler);

    resizeHandler();

    if (windowSize > 540) {
      setShowLinks(false);
    }

    return window.removeEventListener("resize", resizeHandler);
  }, [dispatch, windowSize]);

  return (
    <nav className={styles.container}>
      <NavLink className={styles.title} to={"/"}>
        Bop Shop
      </NavLink>
      {windowSize <= 540 && (
        <Button
          buttonHandler={showLinkHandler}
          background={"secondary"}
          tip={""}
        >
          {showLinks ? <FaTimes /> : <FaBars />}
        </Button>
      )}
      <ul
        className={`${
          windowSize > 540 ? styles.desktopView : styles.mobileView
        } ${showLinks ? styles.open : styles.close}`}
      >
        <li className={styles.navLink}>
          <Link colorPrimary={true} path={"/cart"} padding={true}>
            <FaShoppingCart /> Cart{" "}
            {shoppingCart?.length > 0 && user.token && (
              <span className={styles.badge}>{shoppingCart.length}</span>
            )}
          </Link>
        </li>
        <li className={styles.navLink}>
          <Link colorPrimary={true} path={"/checkout"} padding={true}>
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
              <Link colorPrimary={true} path={"/profile"} padding={true}>
                Dashboard
              </Link>
            </li>
            <li className={styles.profileLink}>
              <Link
                colorPrimary={true}
                path={"/profile/history"}
                padding={true}
              >
                Order History
              </Link>
            </li>
            <li className={styles.profileLink}>
              <Link
                colorPrimary={true}
                path={"/profile/wish-list"}
                padding={true}
              >
                Wish List{" "}
                {wishList?.length > 0 && user.token && (
                  <span className={styles.badge}>{wishList.length}</span>
                )}
              </Link>
            </li>
          </ul>
        </li>
        {!user.token && (
          <li className={styles.navLink}>
            <Link colorPrimary={true} path={"/login"} padding={true}>
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
