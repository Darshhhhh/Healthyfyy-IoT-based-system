import React, { useState, useEffect } from "react";

function TempHome() {
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
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div style={{ height: "40px" }}>
      {data.slice(0, 1).map((mydata) => (
        <h1>{mydata.TEMP_VALUE} °F</h1>
      ))}
    </div>
  );
}

export default TempHome;
