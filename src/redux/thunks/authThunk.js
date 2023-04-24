import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

//actions
import { authActions } from "../slices/authSlice";

export const registerUser = (email, name, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((results) => {
      console.log(results);
      if (!results) {
        return;
      }
      const user = results.user;
      updateProfile(user, { displayName: name })
        .then(() => {})
        .catch((err) => {
          console.log(err);
        });
      console.log(user);
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export const login = (email, password) => {
  return (dispatch) => {
    signInWithEmailAndPassword(auth, email, password).then((results) => {
      if (!results) {
        return;
      }

      results.user.getIdTokenResult().then((user) => {
        const info = {
          id: user.claims.user_id,
          email: user.claims.email,
          name: user.claims.name,
          token: user.token,
        };
        localStorage.setItem("user", JSON.stringify(info));
        dispatch(authActions.setUser(info));
      });
    });
  };
};

export const logout = () => {
  return (dispatch) => {
    signOut(auth)
      .then(() => {
        dispatch(authActions.setUserReset());
        localStorage.clear();
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
};
