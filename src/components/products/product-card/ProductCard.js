//components
import Link from "../../shared/link/Link";

//styles
import styles from "./ProductCard.module.scss";

const ProductCard = ({ brand, category, id, image, price, stock, title }) => {
  return (
    <div className={styles.cardContainer}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.contentWrapper}>
        <div className={styles.imgWrapper}>
          <img className={styles.image} src={image} alt={title} />
        </div>
        <div className={styles.infoWrapper}>
          <p>{brand}</p>
          <div className={styles.row}>
            <p className={styles.category}>{category}</p>
            <p>
              ${price} <span className={styles.stock}>(Stock: {stock})</span>
            </p>
          </div>
        </div>
      </div>
      <Link path={`/${id}`} classStyle={"button"}>
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
