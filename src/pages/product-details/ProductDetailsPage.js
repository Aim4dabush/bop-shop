import { useEffect } from "react";
import { useParams } from "react-router-dom";

//actions
import { productsActions } from "../../redux/slices/productsSlice";
import { windowActions } from "../../redux/slices/windowSlice";

//components
import ProductDetails from "../../components/product-details/ProductDetails";

//redux
import { useDispatch, useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { products } = useSelector((state) => state.products);
  const { windowSize } = useSelector((state) => state.window);

  useEffect(() => {
    if (id) {
      const product = products.find((item) => {
        return item.id === parseInt(id);
      });

      dispatch(productsActions.setProduct(product));
    }
  }, [dispatch, id, products]);

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
      <ProductDetails />
    </section>
  );
};

export default ProductDetailsPage;
