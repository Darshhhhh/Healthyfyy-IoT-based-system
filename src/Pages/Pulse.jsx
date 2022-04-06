import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Navbar from "../components/Navbar";
function Pulse() {
  const [data, setData] = useState([]);

  const apifetch = () => {
    fetch("https://reactinfotesting123.000webhostapp.com/pulsetable.php")
      .then((response) => response.json())
      .then((json) => {
        setData(json.Pulse_Data);
      });
  };
  useEffect(() => {
    apifetch();
    const interval = setInterval(() => {
      apifetch();
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Pulse Data</h1>
      <Table
        striped
        bordered
        hover
        style={{ width: "100%", marginTop: "15px" }}
      >
        <thead
          style={{
            backgroundColor: "#ff835e",
            height: "25px",
          }}
        >
          {/* <th>PULSE ID</th> */}
          <th>Device ID</th>
          <th>PULSE Value</th>
          <th>Date-Time</th>
        </thead>
        <tbody>
          {data.map((mydata) => (
            <tr style={{ textAlign: "center" }}>
              {/* <td>{mydata.PULSE_ID}</td> */}
              <td>{mydata.DEVICE_ID}</td>
              <td>{mydata.PULSE_VALUE}</td>
              <td>{mydata.ADDED_TIME}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Pulse;
