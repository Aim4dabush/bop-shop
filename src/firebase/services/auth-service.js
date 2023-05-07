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
import { postUserGeneral } from "./profile-service";

export const registerUser = (info, password) => {
  return async (dispatch) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        info.email,
        password
      );
      if (!result) {
        throw new Error("Unable to get credentials");
      }

      const user = result.user;
      updateProfile(user, {
        displayName: info.name,
        email: info.email,
        phoneNumber: info.phone,
      });
      dispatch(
        postUserGeneral({
          birth: info.birth,
          email: info.email,
          name: info.name,
          phone: info.phone,
          id: user.uid,
        })
      );
      dispatch(
        notificationActions.setInfo({
          show: true,
          status: "Success",
          message: `${info.name} is registered with email ${info.email}`,
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
