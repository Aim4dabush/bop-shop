//components
import Button from "../../shared/button/Button";

//styles
import styles from "./CheckoutList.module.scss";

const CheckoutList = () => {
  const product = {
    title: "test",
    quantity: 1,
    price: 2,
    subtotal: 2,
  };
  const total = 2;
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
          <tr>
            <th>{product.title}</th>
            <th>{product.quantity}</th>
            <th>${product.price}</th>
            <th>${product.subtotal}</th>
          </tr>
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
