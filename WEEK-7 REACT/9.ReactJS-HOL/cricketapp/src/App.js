import React, { useState } from 'react';
import ListofPlayers from './components/ListofPlayers';
import Scorebelow70 from './components/Scorebelow70';
import { OddPlayers } from './components/OddPlayers';
import { EvenPlayers } from './components/EvenPlayers';
import ListofIndianPlayers from './components/ListofIndianPlayers';

function App() {
  const [flag, setFlag] = useState(true); // control which component is shown

  const players = [
    { name: 'Virat', score: 90 },
    { name: 'Rohit', score: 65 },
    { name: 'Dhoni', score: 80 },
    { name: 'Rahul', score: 50 },
    { name: 'Shreyas', score: 60 },
    { name: 'Jadeja', score: 75 },
    { name: 'Hardik', score: 55 },
    { name: 'Bumrah', score: 45 },
    { name: 'Shami', score: 72 },
    { name: 'Ashwin', score: 85 },
    { name: 'Pant', score: 68 }
  ];

  const IndianTeam = ['Virat', 'Rohit', 'Dhoni', 'Rahul', 'Shreyas', 'Jadeja'];
  const T20Players = ['First Player', 'Second Player', 'Third Player'];
  const RanjiTrophyPlayers = ['Fourth Player', 'Fifth Player', 'Sixth Player'];
  const IndianPlayers = [...T20Players, ...RanjiTrophyPlayers];

  return (
    <div>
      {/* Toggle Button */}
      <button onClick={() => setFlag(!flag)}>
        {flag ? 'Switch to Indian Team View' : 'Switch to Score View'}
      </button>

      <hr />

      {/* Simple if-else using flag to show either view */}
      {flag === true ? (
        <div>
          <h1>List of Players</h1>
          <ListofPlayers players={players} />
          <hr />
          <h1>List of Players having Scores Less than 70</h1>
          <Scorebelow70 players={players} />
        </div>
      ) : (
        <div>
          <h1>Indian Team</h1>
          <h2>Odd Players</h2>
          {OddPlayers(IndianTeam)}
          <hr />
          <h2>Even Players</h2>
          {EvenPlayers(IndianTeam)}
          <hr />
          <h2>List of Indian Players Merged:</h2>
          <ListofIndianPlayers IndianPlayers={IndianPlayers} />
        </div>
      )}
    </div>
  );
}

export default App;