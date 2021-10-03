import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  // Needs parameter to access event object
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(firstName, email);
    if(firstName && email) {
      const person = {id: new Date().getTime.toString(), firstName:firstName, email:email};
      setPeople((people) => {
        // return spread operator. Commonly used when adding something to end of a list
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
    } else {
      console.log("empty values");
    }
  };

  return (
    <>
      <article>
        <form className="form">
          <div className="form-control">
            <label htmlFor="firstName">Name : </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={firstName}
              // onChange Event listener
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">email : </label>
            <input type="text" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <button type="submit" onClick={handleSubmit}>
            add person
          </button>
        </form>
        {
          people.map((person) => {
            const {id, firstName, email} = person
            return <div className="item" key={id}>
              <h4>{firstName}</h4>
              <p>{email}</p>
            </div>
          })
        }
      </article>
    </>
  );
};

export default ControlledInputs;
