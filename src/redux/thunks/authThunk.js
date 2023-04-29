import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

//actions
import { authActions } from "../slices/authSlice";
import { cartActions } from "../slices/cartSlice";
import { notificationActions } from "../slices/notificationSlice";

export const registerUser = (email, name, password) => {
  return async (dispatch) => {
    try {
      const results = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (!results) {
        throw new Error("Unable to get results");
      }

      const user = results.user;
      updateProfile(user, { displayName: name });
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: `${name} is registered with email ${email}`,
        })
      );
    } catch (err) {
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Error",
          message: err.message,
        })
      );
    }
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    try {
      const results = await signInWithEmailAndPassword(auth, email, password);

      if (!results) {
        throw new Error("Unable to get results");
      }

      const user = await results.user.getIdTokenResult();

      if (!user) {
        throw new Error("Unable to get user token");
      }

      const info = {
        id: user.claims.user_id,
        email: user.claims.email,
        name: user.claims.name,
        token: user.token,
      };

      localStorage.setItem("user", JSON.stringify(info));
      dispatch(authActions.setUser(info));
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: `${info.name} login successful`,
        })
      );
    } catch (err) {
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Error",
          message: err.message,
        })
      );
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    signOut(auth);
    dispatch(authActions.setUserReset());
    dispatch(cartActions.setPostShopCartReset());
    dispatch(cartActions.setPostWishCartReset());
    localStorage.clear();
    dispatch(
      notificationActions.setInfo({
        show: true,
        status: "Logout",
        message: "Logout successful!",
      })
    );
  };
};
