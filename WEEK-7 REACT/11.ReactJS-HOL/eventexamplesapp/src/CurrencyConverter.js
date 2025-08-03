// src/CurrencyConverter.js
import React, { useState } from 'react';

function CurrencyConverter() {
  const [rupees, setRupees] = useState('');
  const [euro, setEuro] = useState(null);

  const handleSubmit = () => {
    const rate = 0.011;
    const converted = parseFloat(rupees) * rate;

    if (!isNaN(converted)) {
      setEuro(converted.toFixed(2));
    } else {
      setEuro(null);
    }
  };

  return (
    <div>
      <h2>Currency Converter (INR to Euro)</h2>
      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro !== null && <p>Converted Amount in Euro: €{euro}</p>}
    </div>
  );
}

export default CurrencyConverter;
