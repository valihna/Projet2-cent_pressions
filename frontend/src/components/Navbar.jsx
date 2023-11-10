import "./Navbar.css";

function NavBar() {
  return (
    <div className="navbar">
      <div className="navbar-header">
        <div className="logo-site">LOGO</div>
        <h1 className="title-site">CENT PRESSIONS</h1>
      </div>
      <div className="navbar-menu">
        <div className="home">HOME</div>
        <div className="logo-cart">PANIER</div>
      </div>
    </div>
  );
}

export default NavBar;
