import { Fragment, useEffect } from "react";

//actions
import { notificationActions } from "./redux/slices/notificationSlice";

//components
import Modal from "./modal/Modal";
import NavBar from "./components/nav-bar/NavBar";
import { Outlet } from "react-router-dom";

//luxon
import { DateTime } from "luxon";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { getUserProfile } from "./firebase/services/profile-service";
import { getShoppingCart } from "./firebase/services/shopping-cart-service";
import { getWishList } from "./firebase/services/wish-list-service";
import { logout } from "./firebase/services/auth-service";

//styles
import "./App.module.scss";

function App() {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.notification.info);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getUserProfile(user));
    dispatch(getShoppingCart());
    dispatch(getWishList());
  }, [dispatch, user]);

  useEffect(() => {
    let autoLog;
    let closeNotification;
    let date = new Date(user.expiration);
    let currentTime = DateTime.now().toFormat("x");
    let logoutTime = DateTime.fromJSDate(date).toFormat("x");
    let expirationTime = logoutTime - currentTime;

    if (show) {
      closeNotification = setTimeout(() => {
        dispatch(notificationActions.setInfoReset());
      }, 3000);
    }

    if (date) {
      autoLog = setTimeout(() => {
        dispatch(logout());
        dispatch(notificationActions.setInfoReset());
      }, expirationTime);
    }

    return () => {
      clearTimeout(closeNotification);
      clearTimeout(autoLog);
    };
  }, [dispatch, show, user]);

  return (
    <Fragment>
      <Modal />
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
    </Fragment>
  );
}

export default App;
