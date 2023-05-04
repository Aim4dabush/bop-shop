import { Fragment, useEffect } from "react";

//actions
import { notificationActions } from "./redux/slices/notificationSlice";

//components
import Modal from "./modal/Modal";
import NavBar from "./components/nav-bar/NavBar";
import { Outlet } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { getUserProfile } from "./firebase/services/profile-service";
import { getShoppingCart } from "./firebase/services/shopping-cart-service";
import { getWishList } from "./firebase/services/wish-list-service";

//styles
import styles from "./App.module.scss";

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
    let closeNotification;
    if (show) {
      closeNotification = setTimeout(() => {
        dispatch(notificationActions.setInfoReset());
      }, 3000);
    }

    return () => {
      clearTimeout(closeNotification);
    };
  }, [dispatch, show]);

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
