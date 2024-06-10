import React, { useState } from "react";
import "./Navbar.css";
import Cart_icon from "../assets/cart_icon.png";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, Setmen] = useState("product");
  return (
    <div className="navbar ">
      <div className="log">Ismail Group</div>
      <ul className="nav-menu">
        <li onClick={() => Setmen("product")}>
          {" "}
          <Link to="Product" style={{ textDecoration: "none", color: "black" }}>
            Products
          </Link>
          {menu === "product" ? <hr /> : <></>}{" "}
        </li>
        <li onClick={() => Setmen("Rice")}>
          <Link to="Rice" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            Rice
          </Link>
          {menu === "Rice" ? <hr /> : <></>}{" "}
        </li>
        <li onClick={() => Setmen("Sugar")}>
          <Link to="Sugar" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            sugar
          </Link>{" "}
          {menu === "Sugar" ? <hr /> : <></>}{" "}
        </li>
        <li onClick={() => Setmen("Salts")}>
          <Link to="Salts" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            salts
          </Link>{" "}
          {menu === "Salts" ? <hr /> : <></>}{" "}
        </li>
        <li onClick={() => Setmen("MaizeFlour")}>
          {" "}
          <Link
            to="MaizeFlour"
            style={{ textDecoration: "none", color: "black" }}
          >
            {" "}
            maize Flour
          </Link>
          {menu === "MaizeFlour" ? <hr /> : <></>}{" "}
        </li>
        <li onClick={() => Setmen("Soap")}>
          {" "}
          <Link to="Soap" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            Soap
          </Link>
          {menu === "Soap" ? <hr /> : <></>}{" "}
        </li>
        <li onClick={() => Setmen("Oil")}>
          {" "}
          <Link to="Oil" style={{ textDecoration: "none", color: "black" }}>
            {" "}
            Oil
          </Link>
          {menu === "Oil" ? <hr /> : <></>}{" "}
        </li>
      </ul>
      <div className="join-cart">
        <Link to="Login">
          {" "}
          <button>SigIn</button>
        </Link>
        <Link to="sigin">
          {" "}
          <button>SigUp</button>
        </Link>
        <Link to="cart">
          {" "}
          <img src={Cart_icon} alt="" />
        </Link>

        <div className="cart-count">0</div>
      </div>
    </div>
  );
}

export default Navbar;
