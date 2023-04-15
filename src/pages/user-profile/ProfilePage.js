//components
import { Outlet } from "react-router-dom";

//styles
import styles from "./ProfilePage.module.scss";

const ProfilePage = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProfilePage;
