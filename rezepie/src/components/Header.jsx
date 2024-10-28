
import "../styles/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.avif";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="title">Recipe Master</h1>
      </div>
      <nav className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/favorites" className="nav-link">Favorites</Link>
        <Link to="/tips" className="nav-link">Tips&Tricks</Link>
      </nav>
    </header>
  );
};
