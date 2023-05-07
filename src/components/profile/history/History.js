//react icons
import { FaBan } from "react-icons/fa";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./History.module.scss";

const History = () => {
  const { history } = useSelector((state) => state.history);

  return (
    <div className={styles.container}>
      {history?.length > 0 && (
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
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </tbody>
        </table>
      )}
      {history.length === 0 && (
        <p className={styles.empty}>
          <FaBan /> No order history found <FaBan />
        </p>
      )}
    </div>
  );
};

export default History;
