import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide component
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size,setSize] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize',checkSize);
    // Cleanup function VERY IMPORTANT so we don't create multiple eventlisteners
    return () => {
      window.removeEventListener('resize',checkSize);
    }
  },[])

  const checkSize = () => {
    setSize(window.innerWidth);
  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>size : {size}</h2>
      <h1>window px</h1>
    </div>
  );
};

export default ShowHide;
