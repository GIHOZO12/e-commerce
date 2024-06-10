import React, { useState } from "react";
import "./css/login.css";
import google from "../Components/assets/google.png";
import facebook from "../Components/assets/facebook.png";
import twitter from "../Components/assets/twitter.png";
import Validation from "./Validation";
import { Link } from "react-router-dom";
// import { json } from "react-router-dom";

function Login() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [errror, seterror] = useState({});

  function handlechange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    seterror(Validation(values));
  }
  // useEffect(() => {
  //   if (
  //     Object.keys(errror).length === 0 &&
  //     values.email !== "" &&
  //     values.password !== ""
  //   ) {
  //     alert("Form submitted successfully");
  //   }
  // }, [errror, values.email, values.password]);

  return (
    <div className="login">
      <div className="login-container">
        <h2 style={{ textAlign: "center" }}>Sigin</h2>
        <div className="login-inputbox">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="email" // Ensure the name attribute is set correctly
              placeholder="E-mail"
              value={values.email}
              onChange={handlechange}
            />

            {errror.email && <p style={{ color: "red" }}>{errror.email}</p>}
            <input
              type="password"
              name="password"
              placeholder="password"
              value={values.password}
              onChange={handlechange}
            />
            {errror.password && (
              <p style={{ color: "red" }}>{errror.password}</p>
            )}
            <button>Signin</button>
          </form>
        </div>
        <div className="image-continue">
          <p>or Continue with </p>
          <img src={google} alt="" />
          <img src={facebook} alt="" />
          <img src={twitter} alt="" />

          <p>
            New to the app?{" "}
            <Link to="/Sigin" style={{ textDecoration: "none", color: "red" }}>
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
