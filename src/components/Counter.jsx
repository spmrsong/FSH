import React from "react";

const Counter = ({ count, Increment }) => {
  return (
    <div>
      <p>{`Count: ${count}`}</p>
      <button onClick={Increment}>Increment</button>
    </div>
  );
};

export default Counter;
