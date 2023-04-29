//components
import DetailsCard from "./details-card/DetailsCard";

//styles
import styles from "./ProductDetails.module.scss";

const ProductDetails = () => {
  return (
    <div className={styles.container}>
      <DetailsCard />
    </div>
  );
};

export default ProductDetails;
