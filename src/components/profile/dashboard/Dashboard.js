//components
import CustomerInfo from "./customer-info/CustomerInfo";
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
      <div className={styles.customer_wrapper}>
        <CustomerInfo />
      </div>
    </div>
  );
};

export default Dashboard;
