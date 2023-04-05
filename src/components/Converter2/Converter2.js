import { useState } from 'react';
import React from 'react';
import './Converter2.css';

const API_KEY = 'x6GNy86E39DX4GWCqGJgEbchYsbfJ3XExbcMi6Na';

const Converter2 = () => {
  let inputText = React.createRef();
  const [text, setText] = useState('RUB');
  const [currency, setCurrency] = useState('');

  const handleInput = (e) => {
    setCurrency(e.target.value);
  };

  const getCurrencyRate = (to) => {
    const cash = inputText.current.value;
    fetch(`https://api.currencyapi.com/v3/latest?apikey=${API_KEY}&base_currency=${text}&currencies=${to}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const rate = data.data[to].value;
        console.log('rate:', rate);
        const usd = parseFloat(cash) * rate;
        setCurrency(usd.toFixed(2));
        setText(to);
      });
  };

  const handleConverterUSD = () => {
    getCurrencyRate('USD');
  };

  const handleConverterEUR = () => {
    getCurrencyRate('EUR');
  };

  const handleConverterRSD = () => {
    getCurrencyRate('RSD');
  };

  const handleConverterKZT = () => {
    getCurrencyRate('KZT');
  };

  const handleConverterRUB = () => {
    getCurrencyRate('RUB');
  };

  return (
    <div className="container">
      <h2>{text}</h2>
      <input type="number" step="1" value={currency} onChange={handleInput} ref={inputText} placeholder="0.00" />
      <br />
      <button className="btn" onClick={handleConverterUSD}>
        USD
      </button>
      <button className="btn" onClick={handleConverterEUR}>
        EUR
      </button>
      <button className="btn" onClick={handleConverterRSD}>
        RSD
      </button>
      <button className="btn" onClick={handleConverterKZT}>
        KZT
      </button>
      <button className="btn" onClick={handleConverterRUB}>
        RUB
      </button>
    </div>
  );
};

export default Converter2;
