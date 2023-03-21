import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { GlobalConstants } from "../Utils/GlobalConst";
function Temperature() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const api_Url = GlobalConstants.api_domain + "temptable.php";
    axios
      .get(api_Url)
      .then(function (response) {
        var res = response.data;
        setData(res.Temp_Data);
      })
      .catch(function (error) {
        console.log(error.message);
      })
      .then(function () {
        // always executed
      });
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
          <th>Temp ID</th>
          <th>Device ID</th>
          <th>Temp Value</th>
          <th>Date-Time</th>
        </thead>
        <tbody>
          {data?.map((mydata, index) => (
            <tr style={{ textAlign: "center" }}>
              <td>{index}</td>
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
