import { useEffect } from "react";

//components
import Checkout from "../../components/checkout/Checkout";

//redux
import { useDispatch } from "react-redux";

//services
import { getShoppingCart } from "../../firebase/services/shopping-cart-service";

const CheckoutPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getShoppingCart());
  }, [dispatch]);
  return (
    <section>
      <Checkout />
    </section>
  );
};

export default CheckoutPage;
