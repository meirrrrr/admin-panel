import "./login.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Когда буду подключаить useNavigate, передать state с данным для Sidebar
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userCredentials = {
      username: event.target.login.value,
      password: event.target.password.value,
    };

    try {
      const response = await axios.post(
        "http://192.168.1.214:8080/auth/sign-in",
        userCredentials
      );
      const token = response.data.token;
      sessionStorage.setItem("token", token);
      const decoded = jwtDecode(token);

      if (decoded.Roles[0].Role === "ADMIN") {
        sessionStorage.setItem("userRole", decoded.Roles[0].Role);
        navigate("/admin/managers");
      } else if (decoded.Roles[0].Role === "MANAGER") {
        sessionStorage.setItem("userRole", decoded.Roles[0].Role);
        navigate("manager/orders");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="login">
      <div className="login-wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="text" placeholder="Username" required />
          </div>
          <div className="input-box">
            <input type="password" placeholder="Password" required />
          </div>
          <button type="submit" className="btn">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
