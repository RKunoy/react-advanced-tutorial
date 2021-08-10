import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name:'peter',
    age:24,
    message:'random message'
  });


  const [name, setName] = useState('peter')
  const [age, setAge] = useState(24)
  const [message, setMessage] = useState('random message')

  const changeName = () => {
    setName('New Name');
  }
  const changeAge = () => {
    setAge(69);
  }

  const changeMessage = () => {
    // When working with objects we have to use spread operator
    // so we don't wipe out the whole object
    // setPerson({...person, message: 'hello world'});
    setMessage('New Message');
  }
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeName}>
        change name
      </button>
      <button className="btn" onClick={changeAge}>
        change age
      </button>
      <button className="btn" onClick={changeMessage}>
        change message
      </button>
    </>
  )
};

export default UseStateObject;
