import { useState } from 'react';
import './Converter.css';

const Converter = () => {
  const [inputRub, setInputRub] = useState('');
  const [inputUsd, setInputUsd] = useState('');

  const handleConverterRub = (e) => {
    const rub = parseFloat(e.target.value);
    // console.log(rub);
    const usd = rub / 77.32;
    // console.log(usd);
    setInputRub(rub);
    setInputUsd(usd.toFixed(2));
  };

  const handleConverterUsd = (e) => {
    // console.log('rrr');
    const usd = parseFloat(e.target.value);
    // console.log(usd);
    const rub = usd * 77.32;
    setInputUsd(usd);
    setInputRub(rub.toFixed(2));
  };

  return (
    <div className="container">
      <h2>RUB</h2>
      <input className="rub" type="number" value={inputRub} onChange={handleConverterRub} />
      <h2>USD</h2>
      <input className="usd" type="number" value={inputUsd} onChange={handleConverterUsd} />
    </div>
  );
};

export default Converter;
