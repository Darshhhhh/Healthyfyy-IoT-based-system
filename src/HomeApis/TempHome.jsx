import React, { useState, useEffect } from "react";
import axios from "axios";
import { GlobalConstants } from "../Utils/GlobalConst";

function TempHome() {
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
    <div style={{ height: "40px" }}>
      {data?.slice(0, 1).map((mydata) => (
        <h1>{mydata.TEMP_VALUE} °F</h1>
      ))}
    </div>
  );
}

export default TempHome;
