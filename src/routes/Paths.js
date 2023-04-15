import { Routes, Route } from "react-router-dom";
import App from "../App";

//pages
import CartPage from "../pages/cart/CartPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import DashboardPage from "../pages/user-dashboard/DashboardPage";
import HistoryPage from "../pages/user-history/HistoryPage";
import LoginPage from "../pages/login/LoginPage";
import ProductDetailsPage from "../pages/product-details/ProductDetailsPage";
import ProductsPage from "../pages/products/ProductsPage";
import ProfilePage from "../pages/user-profile/ProfilePage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import WishListPage from "../pages/user-wish-list/WishListPage";

const Paths = () => {
  return (
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<ProductsPage />} />
        <Route element={<ProductDetailsPage />} path=":id" />
        <Route element={<CartPage />} path="cart" />
        <Route element={<CheckoutPage />} path="checkout" />
        <Route element={<LoginPage />} path="login" />
        <Route element={<RegistrationPage />} path="registration" />

        <Route element={<ProfilePage />} path="profile">
          <Route index element={<DashboardPage />} />
          <Route element={<HistoryPage />} path="history" />
          <Route element={<WishListPage />} path="wish-list" />
        </Route>
      </Route>
    </Routes>
  );
};

export default Paths;
