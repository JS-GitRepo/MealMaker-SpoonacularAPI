import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <i className="burgerIcon"></i>
      <h1>MealMaker</h1>
      <p className="header-slogan">meals from your pantry...</p>
      <Link to={`/favorites`}>
        <i className="fa-brands fa-gratipay"></i>
      </Link>
    </header>
  );
};

export default Header;
