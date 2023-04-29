import { useEffect } from "react";

//components
import Products from "../../components/products/Products";

//redux
import { useDispatch, useSelector } from "react-redux";

//thunks
import { getProducts } from "../../redux/thunks/productsThunk";

const ProductsPage = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (products.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, products]);
  return (
    <section>
      <Products />
    </section>
  );
};

export default ProductsPage;
