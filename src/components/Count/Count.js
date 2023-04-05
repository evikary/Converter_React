import { useState } from 'react';
import './Count.css';

const Count = () => {
  const [count, setCount] = useState(0);

  const handleResetCount = () => {
    setCount(0);
  };

  const handleComplexIncreseCount = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, 3000);
  };

  return (
    <>
      <h1>{count}</h1>
      <button className="btn" onClick={() => setCount(count - 1)}>
        decrease
      </button>
      <button className="btn" onClick={handleResetCount}>
        reset
      </button>
      <button className="btn" onClick={() => setCount(count + 1)}>
        increase
      </button>

      <h1 className="count">{count}</h1>
      <button className="btn" onClick={handleComplexIncreseCount}>
        complex increase
      </button>
    </>
  );
};

export default Count;
