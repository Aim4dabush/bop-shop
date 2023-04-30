import { useEffect } from "react";

//actions
import { windowActions } from "../../redux/slices/windowSlice";

//components
import Products from "../../components/products/Products";

//redux
import { useDispatch, useSelector } from "react-redux";

//thunks
import { getProducts } from "../../redux/thunks/productsThunk";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);
  const { windowSize } = useSelector((state) => state.window);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);

  useEffect(() => {
    const resizeHandler = () => {
      dispatch(windowActions.setWindowSize(window.innerWidth));
    };

    window.addEventListener("resize", resizeHandler);

    resizeHandler();

    return window.removeEventListener("resize", resizeHandler);
  }, [dispatch, windowSize]);
  return (
    <section>
      <Products />
    </section>
  );
};

export default ProductsPage;
