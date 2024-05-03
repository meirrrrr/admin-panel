import "./sidebar.scss";
import { adminButtons, managerButtons } from "./buttons.js";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const role = "admin";

  let buttons;
  if (role == "admin") {
    buttons = adminButtons;
  } else {
    buttons = managerButtons;
  }

  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">{role.toUpperCase()}</span>
      </div>
      <hr />
      <div className="center">
        <p className="title">MAIN</p>
        <ul>
          {buttons.map((button) => {
            // тут на li просто надо сделать redirect. и путь сделать admin/${button.name.lower}
            // onClick={() => navigate(path)}
            //
            return (
              <li
                key={button.name}
                onClick={() =>
                  navigate(`/admin/${button.name.toLowerCase()}`, {
                    state: { buttonName: button.name },
                  })
                }
              >
                <div className="icon">{button.icon}</div>
                <span>{button.name}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption"></div>
        <div className="colorOption"></div>
      </div>
    </div>
  );
};

export default SideBar;
