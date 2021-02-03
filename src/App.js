import React, { useEffect, useState } from "react";
import Chart from "./components/Chart";

function App() {
  const [numX, setNumX] = useState(0);
  const [numY, setNumY] = useState(0);
  const [data, setData] = useState([]);

  const getRandomInt = () => {
    return Math.floor(Math.random() * (50 - 0)) + 0;
  };

  useEffect(() => {
    const reading = setInterval(() => {
      console.log("updated");
      setNumX(numX + 1);
      setNumY(getRandomInt());
      setData([...data, { x: numX, y: numY }]);
    }, 1000);
    return () => {
      clearInterval(reading);
    };
  }, [data]);

  return (
    <div className="container">
      <h1>Chart</h1>
      <div>
        <Chart data={data} />
      </div>
    </div>
  );
}

export default App;
