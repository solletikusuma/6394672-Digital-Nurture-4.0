import React, { useState } from 'react';
import CurrencyConverter from './CurrencyConverter';

function App() {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState(''); // <-- New state for displaying messages

  const increment = () => {
    setCount(prev => prev + 1);
  };

  const sayHello = () => {
    setMessage("Hello! This is a static message.");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  const handleDecrement = () => {
    setCount(prev => prev - 1);
  };

  const sayMessage = (msg) => {
    setMessage(msg); // <-- Display "Welcome"
  };

  const handleSyntheticEvent = (e) => {
    e.preventDefault();
    setMessage("I was clicked"); // <-- Display synthetic event message
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <br /><br />
      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>

      <br /><br />
      <button onClick={handleSyntheticEvent}>Synthetic OnPress</button>

      <br /><br />
      {message && <p><strong>Message:</strong> {message}</p>}  {/* Show message here */}

      <br /><br />
      <CurrencyConverter />
    </div>
  );
}

export default App;
