import React from 'react';
import { data } from '../../../data';

const UseStateArray = () => {

  const[people, setPeople] = React.useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople);
  }

  return (
    <React.Fragment>
    {
      people.map((person) => {
        const {id,name} = person
        return (
          <div key={id} className="item"> 
            <h4>{name}</h4>
            {/* Button has to be arrow function. Otherwise it will render instantly which will cause it to crash. */}
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );  
      })
    }
    <button className="btn" onClick={() => setPeople([])}>
      clear items
    </button>
    </React.Fragment>
  )
};

export default UseStateArray;
