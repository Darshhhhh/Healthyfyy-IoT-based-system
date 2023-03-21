import React from "react";
import "./Home.css";
import { CardGroup, Card } from "react-bootstrap";
import TempHome from "../HomeApis/TempHome";
import HeartBeatHome from "../HomeApis/HeartBeatHome";
import OxygenHome from "../HomeApis/OxygenHome";
import ECGHome from "../HomeApis/ECGHome";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as BsIcons from "react-icons/bs";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <p id="welcome-text">
        “Time and health are two precious assets that we don’t recognize and
        appreciate until they have been depleted.”
        <h6 style={{ fontSize: "11px" }}>– Denis Waitley</h6>
      </p>
      <hr id="hr" />
      <div className="container">
        <CardGroup>
          <Card>
            <div className="card1">
              <BsIcons.BsThermometerSun
                style={{ height: "35px", width: "35px" }}
              />
              <TempHome />
              <h2>Tempereture</h2>
              <h3>(Ideal Tempereture : 98.6°F)</h3>
            </div>
            <div className="card2">
              <FaIcons.FaHeartbeat style={{ height: "35px", width: "35px" }} />
              <HeartBeatHome />
              <h2>Heart Beat</h2>
              <h3>(Ideal HeartBeat : 60 to 100 BPM)</h3>
            </div>
            <div className="card3">
              <IoIcons.IoMdSpeedometer
                style={{ height: "35px", width: "35px" }}
              />
              <OxygenHome />
              <h2>Oxygen</h2>
              <h3>(Ideal Oxygen Level : 90+)</h3>
            </div>
            <div className="card4">
              <IoIcons.IoMdPulse style={{ height: "35px", width: "35px" }} />
              <ECGHome />
              <h2>ECG value</h2>
              <h3>(Ideal ECG value : 49 to 100 BPM)</h3>
            </div>
          </Card>
        </CardGroup>
      </div>
    </div>
  );
}
export default Home;
