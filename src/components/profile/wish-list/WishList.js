//components
import WishCard from "./wish-card/WishCard";

//react icons
import { FaBan } from "react-icons/fa";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./WishList.module.scss";

const WishList = () => {
  const wishList = useSelector((state) => state.cart.wishCart);
  return (
    <section className={styles.container}>
      {wishList?.length === 0 && (
        <p className={styles.ban}>
          <FaBan /> No items on wish list <FaBan />
        </p>
      )}
      {wishList?.map((item) => {
        return <WishCard key={item.id} item={item} />;
      })}
    </section>
  );
};

export default WishList;
