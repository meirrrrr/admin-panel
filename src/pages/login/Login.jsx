import PersonIcon from "@mui/icons-material/Person";
import LockPersonIcon from "@mui/icons-material/LockPerson";
import "./login.scss";

const Login = () => {
  // Когда буду подключаить useNavigate, передать state с данным для Sidebar

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
