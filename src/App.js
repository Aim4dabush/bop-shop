import { Fragment, useEffect } from "react";

//actions
import { notificationActions } from "./redux/slices/notificationSlice";

//components
import Modal from "./modal/Modal";
import NavBar from "./components/nav-bar/NavBar";
import { Outlet } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

//styles
import styles from "./App.module.scss";

//Thunks
import { getShopData, getWishData } from "./redux/thunks/cartThunk";

function App() {
  const dispatch = useDispatch();
  const { show } = useSelector((state) => state.notification.info);

  useEffect(() => {
    dispatch(getShopData());
    dispatch(getWishData());
  }, [dispatch]);

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
