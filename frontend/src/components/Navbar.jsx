import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import "./Navbar.css";

function NavBar({ onSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="navbar">
      <div className="navbar-header">
        <h1 className="navbar-title-site">CENT PRESSIONS</h1>
      </div>
      <div className={isScrolled ? "navbar-menu sticky" : "navbar-menu"}>
        <div className="navbar-links">
          <Link className="nav-link" to="/" onClick={handleClick}>
            <h2>HOME</h2>
          </Link>
          <Link className="nav-link" to="/basket">
            <h2>MY CART</h2>
          </Link>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </div>
  );
}

export default NavBar;
