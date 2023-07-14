import React, { useState } from "react";

// let currentTime = new Date().toLocaleTimeString("en-US", {
//   hour12: false,
//   hour: "numeric",
//   minute: "numeric",
//   second: "numeric"
// });
// console.log(currentTime);

function App() {
  setInterval(getTime, 1000);

  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  const [time, setTime] = useState(currentTime);

  function getTime() {
    const newTime = new Date().toLocaleTimeString("en-US", {
      hour12: false,
      hour: "numeric",
      minute: "numeric",
      second: "numeric"
    });
    setTime(newTime);
  }

  return (
    <div className="container">
      <h1>{time}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
