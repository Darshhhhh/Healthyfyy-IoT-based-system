import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
import Signup from "./Signup";
import { Link, BrowserRouter as useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      history.push("/Home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      history.push("/Home");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="form-data">
        {error && <Alert variant="danger">{error}</Alert>}
        <h2 className="login-text">Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="uname">
            <b>Username </b>
          </label>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="uname">
            <b>Password </b>
          </label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button variant="primary" type="Submit">
            Log In
          </button>
        </form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
            style={{
              width: "100%",
              textAlign: "center",
              marginTop: "15px",
              marginBottom: "15px",
              borderRadius: "5px",
            }}
          />
        </div>
        <div className="extra-text">
          Don't have an account? <Link to="/Signup">Sign up</Link>
        </div>
      </div>
    </>
  );
};

export default Login;
