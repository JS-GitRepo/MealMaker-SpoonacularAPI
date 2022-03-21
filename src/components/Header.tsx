import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <Link to={`/`} aria-label="home-link">
        <div className="title-logo-container">
          <i className="fa-solid fa-burger"></i>
          <div className="title-container">
            <h1>MealMaker</h1>
            <p className="header-slogan">meals from your pantry...</p>
          </div>
        </div>
      </Link>
      <Link className="fav-link" to={`/favorites`}>
        <i className="fa-brands fa-gratipay"></i>
      </Link>
    </header>
  );
};

export default Header;
