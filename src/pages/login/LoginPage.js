import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

//components
import Login from "../../components/login/Login";

//redux
import { useSelector } from "react-redux";

const LoginPage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    if (user.token) {
      navigate("/", { replace: true });
    }
  }, [navigate, user]);
  return (
    <section>
      <Login />
    </section>
  );
};

export default LoginPage;
