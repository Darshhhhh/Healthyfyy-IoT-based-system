import "./Login.css";
import React, { useState } from "react";
import { Link, BrowserRouter as useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");
  const { signUp } = useUserAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      history.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className="form-data">
        {error && <Alert variant="danger">{error}</Alert>}
        <h1 className="login-text">Register</h1>
        <form onSubmit={handleSubmit}>
          <label for="uname">
            <b>Username </b>
          </label>
          <input
            type="email"
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="upass">
            <b>Password </b>
          </label>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <button variant="primary" type="Submit">
            Sign up
          </button>
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>

          <div className="extra-text">
            Already have an account? <Link to="/">Log In</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
