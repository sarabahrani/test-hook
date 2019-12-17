import React, { useState, useEffect } from "react";

const ClickCountHook = () => {
  const [counter, setCounter] = useState(0);
  const [start, setStart] = useState(true);

  const toggle = () => {
    setStart(!start);
  };

  useEffect(() => {
    let myTimer = null;

    if (!start) {
      myTimer = setInterval(() => setCounter(counter + 1), 2000);
    } else {
      clearInterval(myTimer);
    }

    return () => {
      clearInterval(myTimer);
    };
  }, [counter, start]);

  return (
    <div className="App">
      <label> {counter}</label>
      <button onClick={toggle}>{start ? "Pause" : "Start"}</button>
    </div>
  );
};

export default ClickCountHook;
