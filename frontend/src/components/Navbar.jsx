import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./Navbar.css";

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <div className="navbar">
      <div className="navbar-header">
        <h1 className="navbar-title-site">CENT PRESSIONS</h1>
      </div>
      <div className={isScrolled ? "navbar-menu sticky" : "navbar-menu"}>
        <Link
          className="home"
          to="/"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          <h2>HOME</h2>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
