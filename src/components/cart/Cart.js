import { useEffect } from "react";

//components
import CartCard from "./cart-card/CartCard";
import SummaryCard from "./summary-card/SummaryCard";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { getShoppingCart } from "../../firebase/services/shopping-cart-service";

//styles
import styles from "./Cart.module.scss";

const Cart = () => {
  const dispatch = useDispatch();
  const shoppingCart = useSelector((state) => state.cart.shopCart);

  useEffect(() => {
    dispatch(getShoppingCart);
  }, [dispatch]);
  return (
    <div className={styles.container}>
      <div className={styles.item_one}>
        {shoppingCart?.length > 0 &&
          shoppingCart.map((item) => {
            return <CartCard key={item.id} item={item} />;
          })}
      </div>
      <div className={styles.item_two}>
        <h1>Cart Summary</h1>
        <SummaryCard />
      </div>
    </div>
  );
};

export default Cart;
