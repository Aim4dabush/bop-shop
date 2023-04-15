//components
import { Outlet } from "react-router-dom";

//styles
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Profile;
