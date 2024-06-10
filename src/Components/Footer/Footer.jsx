import React from "react";
import "./Footer.css";
import whatsapp from "../assets/whatsapp_icon.png";
import Pintrest from "../assets/pintester_icon.png";
import instagram from "../assets/instagram_icon.png";

function Footer() {
  return (
    <div className="footer">
      <hr />
      <div className="footer-left">
        <p>follow us now on these social media</p>
        <img src={whatsapp} alt="" />
        <img src={Pintrest} alt="" />
        <img src={instagram} alt="" />

        <p>&copy;Copyright || all right reserved</p>
      </div>
    </div>
  );
}

export default Footer;
