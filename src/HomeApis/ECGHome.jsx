import React, { useState, useEffect } from "react";

function ECGHome() {
  const [data, setData] = useState([]);

  const apifetch = () => {
    fetch("https://reactinfotesting123.000webhostapp.com/ecgtable.php")
      .then((response) => response.json())
      .then((json) => {
        setData(json.ECG_Data);
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
    <div style={{ height: "40px" }}>
      {data.slice(0, 1).map((mydata) => (
        <h1>{mydata.ECG_VALUE} BPM</h1>
      ))}
    </div>
  );
}

export default ECGHome;
