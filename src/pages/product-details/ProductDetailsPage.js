import { useEffect } from "react";
import { useParams } from "react-router-dom";

//actions
import { productsActions } from "../../redux/slices/productsSlice";

//components
import ProductDetails from "../../components/product-details/ProductDetails";

//redux
import { useDispatch, useSelector } from "react-redux";

const ProductDetailsPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (id) {
      const product = products.find((item) => {
        return item.id === parseInt(id);
      });
      console.log(product);
      dispatch(productsActions.setProduct(product));
    }
  }, [dispatch, id, products]);
  return (
    <section>
      <ProductDetails />
    </section>
  );
};

export default ProductDetailsPage;
