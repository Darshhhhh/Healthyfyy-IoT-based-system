import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { GlobalConstants } from "../Utils/GlobalConst";
import axios from "axios";

function Ecg() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const api_Url = GlobalConstants.api_domain + "ecgtable.php";
    axios
      .get(api_Url)
      .then(function (response) {
        var res = response.data;
        setData(res.ECG_Data);
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
      <h1 style={{ textAlign: "center" }}>ECG Data</h1>
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
          <th>ECG ID</th>
          <th>Device ID</th>
          <th>ECG Value</th>
          <th>Date-Time</th>
        </thead>
        <tbody>
          {data?.map((mydata, index) => (
            <tr style={{ textAlign: "center" }}>
              <td>{index}</td>
              <td>{mydata.DEVICE_ID}</td>
              <td>{mydata.ECG_VALUE}</td>
              <td>{mydata.ADDED_TIME}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Ecg;
