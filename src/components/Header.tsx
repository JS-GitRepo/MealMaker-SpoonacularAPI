import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {

  return <div className="Header">
    <Link to={`/favorites`}><i className="fa-brands fa-gratipay"></i></Link>
  </div>;
};

export default Header;
