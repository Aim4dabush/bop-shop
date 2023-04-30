//components
import WishCard from "./wish-card/WishCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./WishList.module.scss";

const WishList = () => {
  const wish = useSelector((state) => state.cart.getWishCart);

  return (
    <section className={styles.container}>
      {wish?.map((item) => {
        return <WishCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default WishList;
