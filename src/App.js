import { Fragment, useEffect } from "react";

//components
import Modal from "./modal/Modal";
import NavBar from "./components/nav-bar/NavBar";
import { Outlet } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

//styles
import styles from "./App.module.scss";

//Thunks
import { getProducts } from "./redux/thunks/productsThunk";

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);
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
