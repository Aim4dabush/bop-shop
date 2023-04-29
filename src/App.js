import { Fragment, useEffect } from "react";

//components
import Modal from "./modal/Modal";
import NavBar from "./components/nav-bar/NavBar";
import { Outlet } from "react-router-dom";

//redux
import { useDispatch } from "react-redux";

//styles
import styles from "./App.module.scss";

//Thunks
import { getShopData, getWishData } from "./redux/thunks/cartThunk";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShopData());
    dispatch(getWishData());
  }, [dispatch]);
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
