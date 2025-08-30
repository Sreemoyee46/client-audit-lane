import { useNavigate } from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Navigate to verifier dashboard after login
    navigate("/verifier/dashboard");
  };

  return <LoginPage onLogin={handleLogin} />;
};

export default Login;
