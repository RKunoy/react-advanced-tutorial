import React, { useState } from 'react';

// Component needs to start with uppercase
// 'use' has to be inside a function/component body
// 'use' can't be called conditionally
const UseStateBasics = () => {

  // Setup 'useState' which returns two values.
  // First is the current value
  // Second is the handler, which will update the value
  const [text, setText] = useState('random title');

  const handleClick = () => {
    if(text === 'random title') {
      setText('hello world');
    } else {
      setText('random title');
    }
  }

  return <React.Fragment>
    <h1>{text}</h1>
    <button className="btn" onClick={handleClick}>
      change title
    </button>
  </React.Fragment>
};

export default UseStateBasics;