import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Navbar from "../components/Navbar";
function Oxygen() {
  const [data, setData] = useState([]);

  const apifetch = () => {
    fetch("https://reactinfotesting123.000webhostapp.com/oxygentable.php")
      .then((response) => response.json())
      .then((json) => {
        setData(json.Oxygen_Data);
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
      <h1 style={{ textAlign: "center" }}>Oxygen Data</h1>
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
          {/* <th>OXYGEN_ID</th> */}
          <th style={{ height: "30px" }}>Device ID</th>
          <th>Oxygen Value</th>
          <th>Date-Time</th>
        </thead>
        <tbody>
          {data.map((mydata) => (
            <tr style={{ textAlign: "center" }}>
              {/* <td>{mydata.OXYGEN_ID}</td> */}
              <td>{mydata.DEVICE_ID}</td>
              <td>{mydata.OXYGEN_VALUE}</td>
              <td>{mydata.ADDED_TIME}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Oxygen;
