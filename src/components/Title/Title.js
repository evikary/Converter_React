import { useState } from 'react';
import './Title.css';

const Title = () => {
  const [text, setText] = useState('Hello world');

  const handleChangeText = () => {
    // setText('Random text');

    if (text === 'Hello world') {
      setText('Random text');
    } else {
      setText('Hello world');
    }
  };

  return (
    <div className="root_div">
      <h1>{text}</h1>
      <button className="btn" onClick={handleChangeText}>
        change title
      </button>
    </div>
  );
};

export default Title;
