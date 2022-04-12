import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Temperature from "./Pages/Temperature";
import Oxygen from "./Pages/Oxygen";
import Pulse from "./Pages/Pulse";
import Ecg from "./Pages/Ecg";
import Support from "./Pages/Support";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
// import Reports from "./pages/Reports";
// import Products from "./pages/Products";
function App() {
  return (
    <>
      <div className="App">
        <Router>
          <UserAuthContextProvider>
            <Switch>
              <Route path="/" exact component={Login} />
              <Route path="/Home" component={Home} />
              <Route path="/Tempereture-data" component={Temperature} />
              <Route path="/Oxygen-data" component={Oxygen} />
              <Route path="/Pulse-data" component={Pulse} />
              <Route path="/ECG-data" component={Ecg} />
              <Route path="/Support" component={Support} />
              <Route path="/Signup" component={Signup} />
            </Switch>
          </UserAuthContextProvider>
        </Router>
      </div>
    </>
  );
}

export default App;
