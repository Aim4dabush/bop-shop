import { useEffect } from "react";

//components
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
    <main>
      <Outlet />
    </main>
  );
}

export default App;
