//redux
import { useSelector } from "react-redux";

//styles
import styles from "./CheckoutList.module.scss";

const CheckoutList = () => {
  const shoppingCart = useSelector((state) => state.cart.shopCart);
  const total = shoppingCart.reduce((arr, item) => {
    arr = arr + item.price;
    return arr;
  }, 0);

  return (
    <div className={styles.list}>
      <h1>Cart List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {shoppingCart.map((item) => {
            return (
              <tr>
                <th>{item.title}</th>
                <th>{item.quantity}</th>
                <th>${item.price}</th>
                <th>${item.subtotal}</th>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <div className={styles.total}>
        <p>Total: ${total}</p>
      </div>
    </div>
  );
};

export default CheckoutList;
