import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";
function Signup() {
  const history = useHistory();
  function homecall() {
    history.push("/Home");
  }
  return (
    <div>
      <div className="form-data">
        <form>
          <h1 className="login-text">Register</h1>
          <label for="uname">
            <b>Username </b>
          </label>
          <input type="text" placeholder="Enter Username" name="uname" />
          <br />
          <label for="uname">
            <b>Password </b>
          </label>
          <input type="password" placeholder="Enter Password" name="upass" />
          <br />
          <label for="uname">
            <b>Confirm Password </b>
          </label>
          <input type="password" placeholder="Re-Enter Password" name="upass" />
          <br />
          <button type="submit" onClick={homecall}>
            Sign Up
          </button>{" "}
          <br />
          <label>
            <input type="checkbox" name="remember" /> Remember me
          </label>
        </form>
      </div>
    </div>
  );
}

export default Signup;
