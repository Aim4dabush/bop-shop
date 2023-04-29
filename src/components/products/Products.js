//components
import ProductCard from "./product-card/ProductCard";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./Products.module.scss";

const Products = () => {
  const products = useSelector((state) => state.products.products);
  return (
    <div className={styles.container}>
      <div className={styles.productsWrapper}>
        {products.map((product) => {
          return (
            <ProductCard
              brand={product.brand}
              category={product.category}
              id={product.id}
              image={product.mainPic}
              key={product.id}
              price={product.price}
              stock={product.stock}
              title={product.title}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
