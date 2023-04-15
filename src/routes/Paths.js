import { Routes, Route } from "react-router-dom";
import App from "../App";

//pages
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Dashboard from "../pages/user-dashboard/Dashboard";
import History from "../pages/user-history/History";
import Login from "../pages/login/Login";
import ProductDetails from "../pages/product-details/ProductDetails";
import Products from "../pages/products/Products";
import Profile from "../pages/user-profile/Profile";
import Registration from "../pages/registration/Registration";
import WishList from "../pages/user-wish-list/WishList";

const Paths = () => {
  return (
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<Products />} />
        <Route element={<ProductDetails />} path=":id" />
        <Route element={<Cart />} path="cart" />
        <Route element={<Checkout />} path="checkout" />
        <Route element={<Login />} path="login" />
        <Route element={<Registration />} path="registration" />

        <Route element={<Profile />} path="profile">
          <Route index element={<Dashboard />} />
          <Route element={<History />} path="history" />
          <Route element={<WishList />} path="wish-list" />
        </Route>
      </Route>
    </Routes>
  );
};

export default Paths;
