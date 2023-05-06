import { authActions } from "../../redux/slices/authSlice";
import { cartActions } from "../../redux/slices/cartSlice";
import { notificationActions } from "../../redux/slices/notificationSlice";
import { profileActions } from "../../redux/slices/profileSlice";

//firebase
import { auth } from "../firebaseConfig";

//Authentication
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

//services
import { postUserProfile } from "./profile-service";

export const registerUser = (email, name, password) => {
  return async (dispatch) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (!result) {
        throw new Error("Unable to get credentials");
      }

      const user = result.user;
      updateProfile(user, { displayName: name });
      dispatch(
        postUserProfile({
          billingAddress: "",
          shippingAddress: "",
          name,
          email,
          id: user.uid,
        })
      );
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
      const result = await signInWithEmailAndPassword(auth, email, password);

      if (!result) {
        throw new Error("Unable to get credentials");
      }

      const user = await result.user.getIdTokenResult();

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
    try {
      signOut(auth);
      dispatch(authActions.setUserReset());
      dispatch(cartActions.setShopCartReset());
      dispatch(cartActions.setWishCartReset());
      dispatch(profileActions.setProfileReset());
      localStorage.clear();
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Logout",
          message: "Logout successful",
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
