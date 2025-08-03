import React, { useState } from 'react';
import './App.css';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(prev => prev + 1);
    sayHello(); 
  };

  const decrement = () => {
    setCounter(prev => prev - 1);
  };

  const sayHello = () => {
    alert("Hello! Member1");
  };

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handlePress = () => {
    alert("I was clicked");
  };

  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Hello! Member1")}>Say welcome</button>
      <br /><br />
      <button onClick={handlePress}>Click on me</button>
      <br /><br />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
