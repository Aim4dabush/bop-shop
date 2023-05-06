import { useEffect } from "react";

//components
import { Outlet } from "react-router-dom";

//redux
import { useDispatch, useSelector } from "react-redux";

//services
import { getOrderHistory } from "../../firebase/services/history-service";
import { getUserProfile } from "../../firebase/services/profile-service";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getOrderHistory());
    dispatch(getUserProfile(user));
  }, [dispatch, user]);
  return (
    <section>
      <Outlet />
    </section>
  );
};

export default ProfilePage;
