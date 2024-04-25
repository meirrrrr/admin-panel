import "./widget.scss";

const Widget = ({ role }) => {
  // get managers to put in widget
  const titles = ["Manager", "Products", "Orders"];

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{titles[0]}</span>
        <span className="counter">123</span>
        <span className="link">See all users</span>
      </div>
      <div className="right">
        <div className="icon"></div>
      </div>
    </div>
  );
};

export default Widget;
