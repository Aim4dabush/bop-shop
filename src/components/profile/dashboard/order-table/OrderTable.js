import { NavLink } from "react-router-dom";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./OrderTable.module.scss";

const OrderTable = () => {
  const orderList = useSelector((state) => state.history.history);
  return (
    <div className={styles.table_wrapper}>
      <h1>Order History</h1>
      {orderList?.length === 0 && (
        <p className={styles.empty}>No order history</p>
      )}

      {orderList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Receipt</th>
              <th>Order Size</th>
              <th>Order Total</th>
              <th>Order Date</th>
            </tr>
          </thead>
          <tbody>
            {orderList.length > 0 &&
              orderList.map((order) => {
                return (
                  <tr key={order.receipt}>
                    <th>
                      <NavLink
                        to={`/history/${order.receipt}`}
                        className={styles.receipt_link}
                      >
                        {order.receipt}
                      </NavLink>
                    </th>
                    <th>{order.products.length}</th>
                    <th>{order.order_total}</th>
                    <th>{order.order_date}</th>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default OrderTable;
