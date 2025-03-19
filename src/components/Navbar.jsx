  import React, { useState } from "react";
  import logo from "../assets/logo.svg"


  const Navbar = () => {
    const [isActive, setIsActive] = useState(false);

    return (
      <nav className="navbar">
        <div className="logo"><img src={logo} alt="Logo" />
        
        </div>

        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="#">Help</a></li>
          <li>
            <button 
              className={`search-btn ${isActive ? "isActive" : ""}`} 
              onClick={() => setIsActive(!isActive)}
            >
              Search 🔍
            </button>
          </li>
          <li><a href="#">Cart 🛒</a></li>
        </ul>
      </nav>
    );
  };

  export default Navbar;
