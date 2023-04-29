import { Navigate, Routes, Route } from "react-router-dom";
import App from "../App";

//pages
import CartPage from "../pages/cart/CartPage";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import Dashboard from "../components/profile/dashboard/Dashboard";
import History from "../components/profile/history/History";
import LoginPage from "../pages/login/LoginPage";
import ProductDetailsPage from "../pages/product-details/ProductDetailsPage";
import ProductsPage from "../pages/products/ProductsPage";
import ProfilePage from "../pages/profile/ProfilePage";
import RegistrationPage from "../pages/registration/RegistrationPage";
import WishList from "../components/profile/wish-list/WishList";

//redux
import { useSelector } from "react-redux";

const Paths = () => {
  const token = useSelector((state) => state.auth.user.token);

  return (
    <Routes>
      <Route element={<App />} path="/">
        <Route index element={<ProductsPage />} />
        <Route element={<ProductDetailsPage />} path="product/:id" />
        {token && <Route element={<CartPage />} path="cart" />}
        {token && <Route element={<CheckoutPage />} path="checkout" />}
        <Route element={<LoginPage />} path="login" />
        <Route element={<RegistrationPage />} path="registration" />

        {token && (
          <Route element={<ProfilePage />} path="profile">
            <Route index element={<Dashboard />} />
            <Route element={<History />} path="history" />
            <Route element={<WishList />} path="wish-list" />
          </Route>
        )}

        <Route element={<Navigate to="/login" replace={true} />} path="*" />
      </Route>
    </Routes>
  );
};

export default Paths;
