import { NavLink } from "react-router-dom";

//components
import Link from "../../../shared/link/Link";

//redux
import { useSelector } from "react-redux";

//styles
import styles from "./WishTable.module.scss";

const WishTable = () => {
  const wishList = useSelector((state) => state.cart.wishCart);
  return (
    <div className={styles.table_wrapper}>
      <h1>Wish List</h1>
      {wishList.length === 0 && (
        <p className={styles.empty}>Wish List is empty</p>
      )}
      {wishList.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>List</th>
              <th>List Size</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <Link colorPrimary={false} path={"/profile/wish-list"}>
                  Wish List
                </Link>
              </th>
              <th>{wishList.length}</th>
            </tr>
          </tbody>
        </table>
      )}
    </div>
  );
};

export default WishTable;
