import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const decreaseCounter = () => {
    setValue(value-1);
  }

  const resetCounter = () => {
    setValue(0);
  }

  const increaseCounter = () => {
    setValue(value+1);
  }

  return <>
    <section style={{margin:'4rem 0'}}>
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
  </>
};

export default UseStateCounter;
