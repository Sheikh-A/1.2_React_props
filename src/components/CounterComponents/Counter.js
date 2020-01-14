//imports
import React, { useState } from "react";
import CounterButton from "./CounterButton";

const Counter = () => {
  // use state to manage count
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>React Counter</h1>
      <p className="click_desc">
        You clicked <span>{count}</span> times
      </p>

      <div className="button_container">
        <CounterButton text="Add 1" updateCount={() => setCount(count + 1)} />
        <CounterButton
          text="Multiply 5"
          updateCount={() => setCount(count * 5)}
        />
        <CounterButton text="Reset" updateCount={() => setCount(0)} />

        {/* Refactored the buttons into its own component with two props*/}
        {/* <CounterButton text="Add 1" updateCount={() => setCount(count + 1)} />
        <CounterButton
          text="Multiply by 5"
          updateCount={() => setCount(count * 5)}
        />
        <CounterButton text="Reset" updateCount={() => setCount(0)} /> */}
      </div>
    </div>
  );
};

export default Counter;
