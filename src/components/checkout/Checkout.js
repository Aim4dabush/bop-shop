//components
import CheckoutCard from "./checkout-card/CheckoutCard";
import CheckoutList from "./checkout-list/CheckoutList";

//styles
import styles from "./Checkout.module.scss";

const Checkout = () => {
  return (
    <div className={styles.container}>
      <CheckoutCard />
      <CheckoutList />
    </div>
  );
};

export default Checkout;
