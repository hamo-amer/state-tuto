import React, { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [people, setPeople] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    count > 0 && setCount(count - 1);
  };

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then(res => res.json())
      .then(data => setPeople(data.results));
  }, []);

  return (
    <div>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      <br />
      <input
        type='text'
        onChange={e => {
          setName(e.target.value);
        }}
      />
      <br />
      <p>{name}</p>
      {people.map((person, index) => (
        <h1 key={index}>{person.name}</h1>
      ))}
    </div>
  );
}

export default Counter;
