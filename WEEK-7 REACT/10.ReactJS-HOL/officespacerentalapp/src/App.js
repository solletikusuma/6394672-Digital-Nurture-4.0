import React from 'react';
import './App.css';
import officeImage from './office.jpeg'; // Put an image named 'office.jpg' in the src folder

function App() {
  const element = "Office Space";

  const jsxatt = <img src={officeImage} width="25%" height="25%" alt="Office Space" />;

  const offices = [
    { Name: "SmartWorks", Rent: 40000, Address: 'Pune' }
  ];

  return (
    <div className="App">
      <h1>{element}, at Affordable Range</h1>
      {jsxatt}

      {offices.map((item, index) => {
        const rentClass = item.Rent <= 60000 ? "textRed" : "textGreen";

        return (
          <div key={index} className="office-card">
            <h2>Name: {item.Name}</h2>
            <h3 className={rentClass}>Rent: Rs. {item.Rent}</h3>
            <h3>Address: {item.Address}</h3>
            <hr />
          </div>
        );
      })}
    </div>
  );
}

export default App;
