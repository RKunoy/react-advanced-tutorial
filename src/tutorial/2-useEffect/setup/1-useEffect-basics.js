import React, { useState, useEffect } from "react";
// by default 'useEffect' runs after every re-render
// cleanup function
// second parameter
// Hooks cannot be placed inside conditionals
// conditionals can however to be inside hooks
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log("call useEffect");
    // Template string: `string text` , needed for this.
    if(value !== 0) {
      document.title = `New Messages(${value})`;
    }
  },[value]);  // The box is the dependency list. If added, only values inside the dependency will be updated when rendering

  console.log("render component");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click me
      </button>
    </>
  );
};

export default UseEffectBasics;
