import { notificationActions } from "../../redux/slices/notificationSlice";
import { productsActions } from "../../redux/slices/productsSlice";

export const getProducts = () => {
  return async (dispatch) => {
    try {
      const results = await fetch("https://dummyjson.com/products?limit=100");

      if (!results.ok) {
        throw new Error("Unable to get results");
      }

      const data = await results.json();

      if (!data) {
        throw new Error("Unable to get data");
      }

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
          mainPic: product.images[0],
          images: product.images,
          price: product.price,
          rating: product.rating,
          stock: product.stock,
          title: transformTitle,
        });
      });

      dispatch(productsActions.setProducts(arr));
    } catch (err) {
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Error",
          message: err.message,
        })
      );
    }
  };
};
