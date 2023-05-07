//components
import OrderTable from "./order-table/OrderTable";
import WishTable from "./wish-table/WishTable";

//styles
import styles from "./Dashboard.module.scss";

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.list_wrapper}>
        <WishTable />
        <OrderTable />
      </div>
    </div>
  );
};

export default Dashboard;
