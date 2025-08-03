import React, { useState } from 'react';

function CurrencyConverter() {
  const [euro, setEuro] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!euro || isNaN(euro)) {
      alert("Please enter a valid amount in Euro.");
      return;
    }

    const rupees = parseFloat(euro) * 80; // 1 Euro = 80 INR
    alert(`Converting to Euro Amount is ${rupees}`);
  };

  return (
    <div>
      <h2 style={{ color: "green" }}>Currency Converter!!!</h2>
      <form onSubmit={handleSubmit}>
        <label>Amount:</label>
        <input
          type="text"
          value={euro}
          onChange={(e) => setEuro(e.target.value)}
        />
        <br /><br />
        <label>Currency:</label>
        <select>
          <option>Euro</option>
        </select>
        <br /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CurrencyConverter;
