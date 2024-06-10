import React, { useState } from "react";
import "./css/Register.css";
import google from "../Components/assets/google.png";
import facebook from "../Components/assets/facebook.png";
import twitter from "../Components/assets/twitter.png";
import { Link } from "react-router-dom";

function Sigin() {
  const [values, setvalue] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState({});

  function handleChange(e) {
    setvalue({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    setError(Validation1(values));
  }
  const Validation1 = (value) => {
    let error = {};
    let regix = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let regix2 = /^[A-Za-z]+(\s[A-Za-z]+)+$/;

    if (!value.name) {
      error.name = "Name is required";
    } else if (!regix2.test(value.name)) {
    
      error.name = "Please enter full name";
    }
    if (!value.email) {
      error.email = "Email is require";
    } else if (!regix.test(value.email)) {
      error.email = "Email is not an email format";
    }
    if (!value.password) {
      error.password = "Password is required";
    } else if (value.password.length < 4) {
      error.password = "password must be more than 4 characters";
    } else if (value.password.length > 10) {
      error.password = "password must  not exceed 10 characters";
    }
    return error;
  };

  return (
    <div className="login">
      <div className="login-container1">
        <h2 style={{ textAlign: "center" }}>SignUp</h2>
        <div className="login-inputbox1">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="You name"
              value={values.name}
              onChange={handleChange}
            />
            {error.name && <p style={{ color: "red" }}>{error.name}</p>}
            <input
              type="text"
              name="email"
              placeholder="E-mail"
              value={values.email}
              onChange={handleChange}
            />
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
            <input
              type="password"
              name="password"
              value={values.password}
              placeholder="password"
              onChange={handleChange}
            />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
            <button>Register</button>
          </form>
        </div>
        <div className="image-continue">
          <p>or Continue with </p>
          <img src={google} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />

          <p>
            Already have an account?{" "}
            <span style={{}}>
              <Link
                to="/Login"
                style={{ textDecoration: "none", color: "red" }}
              >
                Login
              </Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Sigin;
