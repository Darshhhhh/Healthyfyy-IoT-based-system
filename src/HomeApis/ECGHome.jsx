import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalConstants } from "../Utils/GlobalConst";

function ECGHome() {
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
    <div style={{ height: "40px" }}>
      {data?.slice(0, 1).map((mydata) => (
        <h1>{mydata.ECG_VALUE} BPM</h1>
      ))}
    </div>
  );
}

export default ECGHome;
