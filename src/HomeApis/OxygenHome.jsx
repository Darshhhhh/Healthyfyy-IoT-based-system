import React, { useState, useEffect } from "react";

function OxygenHome() {
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
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ height: "40px" }}>
      {data.slice(0, 1).map((mydata) => (
        <h1>{mydata.OXYGEN_VALUE} %</h1>
      ))}
    </div>
  );
}

export default OxygenHome;
