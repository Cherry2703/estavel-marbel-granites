// import React, { useState } from "react";
// import { FaShoppingCart, FaBars } from "react-icons/fa";

// import "./index.css";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo Section */}
//       <div className="navbar-logo">
//         <img src="https://res.cloudinary.com/ramcharan/image/upload/v1733980572/Estavel/navbar/stone-pedia-logo_rosj3s.png" alt="Company Logo" className="logo" />
//       </div>

//       {/* Links Section */}
//       <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
//         <a href="/shop">Shop by Category</a>
//         <a href="/partner">Partner with Us</a>
//       </div>

//       {/* Search Bar Section */}
//       <div className="navbar-search">
//         <input type="text" placeholder="Search for products" />
//       </div>

//       {/* Icons Section */}
//       <div className="navbar-icons">
//         <FaBars className="menu-btn" onClick={toggleMenu} />
//         <FaShoppingCart className="cart-btn" />
//       </div>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useState } from "react";
import "./index.css";
import { FaShoppingCart, FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src="https://res.cloudinary.com/ramcharan/image/upload/v1733980572/Estavel/navbar/stone-pedia-logo_rosj3s.png" alt="Company Logo" className="logo" />
      </div>

      {/* Links Section */}
      <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
        <a href="/">Shop by Category</a>
        <a href="/">Partner with Us</a>
      </div>

      {/* Search Bar Section */}
      <div className="navbar-search">
        <input type="text" placeholder="Search for products" />
      </div>

      {/* Icons Section */}
      <div className="navbar-icons">
        <FaBars className="menu-btn" onClick={toggleMenu} />
        <FaShoppingCart className="cart-btn" />
      </div>
    </nav>
  );
};

export default Navbar;
