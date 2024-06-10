import React from "react";
import "./NewLetter.css";

function NewsLetter() {
  return (
    <div className="news-letter">
      <h1>Get in touch to Our email</h1>
      <p>Subscribe to our news letter to stay update</p>
      <div>
        <input type="email" placeholder="E-mail id" />
        <button>Sbuscribe</button>
      </div>
    </div>
  );
}

export default NewsLetter;
