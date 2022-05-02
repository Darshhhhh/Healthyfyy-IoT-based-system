import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Navbar from "../components/Navbar";
function Temperature() {
  const [data, setData] = useState([]);

  const apifetch = () => {
    fetch("https://reactinfotesting123.000webhostapp.com/temptable.php")
      .then((response) => response.json())
      .then((json) => {
        setData(json.Temp_Data);
      });
  };
  useEffect(() => {
    apifetch();
    const interval = setInterval(() => {
      apifetch();
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <Navbar />
      <h1 style={{ textAlign: "center" }}>Temperature Data</h1>
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
          {/* <th>Temp ID</th> */}
          <th>Device ID</th>
          <th>Temp Value</th>
          <th>Date-Time</th>
        </thead>
        <tbody>
          {data.map((mydata) => (
            <tr style={{ textAlign: "center" }}>
              {/* <td>{mydata.TEMP_ID}</td> */}
              <td>{mydata.DEVICE_ID}</td>
              <td>{mydata.TEMP_VALUE} °F</td>
              <td>{mydata.ADDED_TIME}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
export default Temperature;
