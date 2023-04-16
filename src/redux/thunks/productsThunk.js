//Actions
import { productsActions } from "../slices/productsSlice";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=100");

      if (!res.ok) {
        throw new Error("Could not get products");
      }

      const data = await res.json();
      const products = data.products;
      const arr = [];
      products.forEach((product) => {
        let transformTitle = product.title.toLowerCase();

        if (transformTitle.charAt(0) === "-") {
          const newText = transformTitle.replace("-", " ").trimStart();
          transformTitle = newText;
        }

        arr.push({
          brand: product.brand,
          category: product.category,
          description: product.description,
          id: product.id,
          images: product.images,
          price: product.price,
          rating: product.rating,
          stock: product.stock,
          title: transformTitle,
        });
      });

      dispatch(productsActions.setProducts(arr));
    } catch (err) {
      console.log(`An error occurred: ${err} `);
    }
  };
};
