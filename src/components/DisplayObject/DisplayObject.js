import './DisplayObject.css';
import { useState } from 'react';

const obj = {
  name: 'Molly',
  age: 3,
  job: 'developer',
  skills: {
    it: 'JavaScript',
    english: 2,
    hard: {
      life: 100,
    },
  },
};

const DisplayObject = () => {
  const [cat, setCat] = useState(obj);

  const handleChangeAge = () => {
    setCat({ ...cat, age: 4 });
  };

  const handleChangeJob = () => {
    setCat({ ...cat, job: 'midlle developer' });
  };

  const handleChangeEnglish = () => {
    setCat({ ...cat, skills: { ...cat.skills, english: 5 } });
  };

  const handleChangeLife = () => {
    setCat({ ...cat, skills: { ...cat.skills, hard: { ...cat.skills.hard, life: 25 } } });
  };

  return (
    <div className="obj">
      <h4>{cat.name}</h4>
      <h4>{cat.age}</h4>
      <h4>{cat.job}</h4>
      <h4>{cat.skills.it}</h4>
      <h4>{cat.skills.english}</h4>
      <h4>{cat.skills.hard.life}</h4>
      <button className="btn" onClick={handleChangeAge}>
        change age
      </button>
      <button className="btn" onClick={handleChangeJob}>
        change job
      </button>
      <button className="btn" onClick={handleChangeEnglish}>
        change english
      </button>
      <button className="btn" onClick={handleChangeLife}>
        change life
      </button>
    </div>
  );
};

export default DisplayObject;
