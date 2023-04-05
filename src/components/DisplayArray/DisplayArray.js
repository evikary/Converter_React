import { useState } from 'react';
import './DisplayArray.css';

const arr = [
  { id: 1, name: 'Molly' },
  { id: 2, name: 'Alisa' },
  { id: 3, name: 'Kate' },
  { id: 4, name: 'Lily' },
  { id: 5, name: 'Alisha' },
];

const DisplayArray = () => {
  const [people, setPeople] = useState(arr);

  const handleDeleteItem = (id) => {
    const newArr = people.filter((item) => item.id !== id);
    setPeople(newArr);
  };

  const list = people.map((item) => {
    return (
      <div className="block" key={item.id}>
        <h2>{item.name}</h2>
        <button className="btn" onClick={() => handleDeleteItem(item.id)}>
          x
        </button>
      </div>
    );
  });

  return (
    <>
      <div className="card">{list}</div>
      <button className="btn" onClick={() => setPeople([])}>
        clear list
      </button>
    </>
  );
};

export default DisplayArray;
