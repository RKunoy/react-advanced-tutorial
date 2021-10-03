import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const decreaseCounter = () => {
    setValue(value - 1);
  };

  const resetCounter = () => {
    setValue(0);
  };

  const increaseCounter = () => {
    setValue(value + 1);
  };

  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value+1);

      // functional approach to setValue. The paramater will always be the
      // current value, while the return value will be set new value.
      setValue((prevValue) => {
        return prevValue + 1;
      });
    }, 2000);
  };

  return (
    <>
      <section style={{ margin: "4rem 0" }}>
        <h2>regular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={decreaseCounter}>
          decrease
        </button>
        <button className="btn" onClick={resetCounter}>
          reset
        </button>
        <button className="btn" onClick={increaseCounter}>
          increase
        </button>
      </section>

      <section style={{ margin: "4rem 0" }}>
        <h2>more complex counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={complexIncrease}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
