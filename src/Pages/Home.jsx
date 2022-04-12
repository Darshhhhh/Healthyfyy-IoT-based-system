import React, { useState, useEffect } from "react";
import "./Home.css";
import { Row, Col, Container, CardGroup, Card } from "react-bootstrap";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import * as FaIcons from "react-icons/fa";
import Temperature from "./Temperature";
function Home() {
  // const [data, setData] = useState([]);

  // const apifetch = () => {
  //   fetch("https://reactinfotesting123.000webhostapp.com/temptable.php")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setData(json.Temp_Data);
  //     });
  // };
  // useEffect(() => {
  //   apifetch();
  //   const interval = setInterval(() => {
  //     apifetch();
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);
  return (
    <div className="home">
      <Navbar />
      <p id="welcome-text">
        “Time and health are two precious assets that we don’t recognize and
        appreciate until they have been depleted.”
        <h6 style={{ fontSize: "11px" }}>– Denis Waitley</h6>
      </p>

      <div class="container">
        <CardGroup>
          <Card>
            <div className="card1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 0 24 24"
                width="35px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h1v2h-1v1h1v2h-2V5z" />
              </svg>
              {/* <div style={{ height: "40px" }}>
                {data.map((mydata) => (
                  <h1>{mydata.TEMP_VALUE}°F</h1>
                ))}
              </div> */}

              <h1>98°F</h1>
              <h2>Tempereture</h2>
              <h3>(Ideal Tempereture : 98.6°F)</h3>
            </div>
            <div className="card2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                enable-background="new 0 0 24 24"
                height="35px"
                viewBox="0 0 24 24"
                width="35px"
                fill="#000000"
              >
                <g>
                  <rect fill="none" height="24" width="24" />
                </g>
                <g>
                  <g>
                    <path d="M20,4H4C2.9,4,2,4.9,2,6v3h2V6h16v3h2V6C22,4.9,21.1,4,20,4z" />
                    <path d="M20,18H4v-3H2v3c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2v-3h-2V18z" />
                    <path d="M14.89,7.55c-0.34-0.68-1.45-0.68-1.79,0L10,13.76l-1.11-2.21C8.72,11.21,8.38,11,8,11H2v2h5.38l1.72,3.45 C9.28,16.79,9.62,17,10,17s0.72-0.21,0.89-0.55L14,10.24l1.11,2.21C15.28,12.79,15.62,13,16,13h6v-2h-5.38L14.89,7.55z" />
                  </g>
                </g>
              </svg>
              <h1>110 BPM</h1>
              <h2>Heart Beat</h2>
              <h3>(Ideal HeartBeat : 60 to 100 BPM)</h3>
            </div>

            <div className="card3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 0 24 24"
                width="35px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M20.38 8.57l-1.23 1.85a8 8 0 0 1-.22 7.58H5.07A8 8 0 0 1 15.58 6.85l1.85-1.23A10 10 0 0 0 3.35 19a2 2 0 0 0 1.72 1h13.85a2 2 0 0 0 1.74-1 10 10 0 0 0-.27-10.44z" />
                <path d="M10.59 15.41a2 2 0 0 0 2.83 0l5.66-8.49-8.49 5.66a2 2 0 0 0 0 2.83z" />
              </svg>

              <h1>97%</h1>
              <h2>Oxygen</h2>
              <h3>(Ideal Oxygen Level : 90+)</h3>
            </div>

            <div className="card4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="35px"
                viewBox="0 0 24 24"
                width="35px"
                fill="#000000"
              >
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99l1.5 1.5z" />
              </svg>
              <h1>84 BPM</h1>
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
