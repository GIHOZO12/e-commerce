import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div>
          <input type="text" placeholder="Search-products here" />
          <button>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Header;
