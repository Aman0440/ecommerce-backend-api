import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">
        MyStore
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search for products..." />
        <button>Search</button>
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Categories</a>
        <a href="#">Orders</a>
      </div>

      {/* Cart + Login */}
      <div className="nav-right">
        <span className="cart">🛒 Cart</span>
        <button className="login-btn">Login</button>
      </div>

    </nav>
  );
}

export default Navbar;