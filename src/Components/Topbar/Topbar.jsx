import "./Topbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
        className="topImg"
          src="https://images.hugoboss.com/is/image/boss/S19SR_AJ_Magazine_005_sRGB?$large$&align=0,-1&fit=crop,1&hei=683&op_brightness=-0&ts=1561709227008&wid=1024"
          alt=""
        />
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
