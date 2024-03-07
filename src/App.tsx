import React from 'react';
import logo from './logo.svg';
import './App.css';
import teams from './CollegeBasketballTeams.json';

function Heading() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>College Basketball Teams</h1>
    </div>
  );
}

function TeamList() {
  return (
    <div>
      <h2>Teams</h2>
      <ul>
        {teams.teams.map((team) => (
          <li style={{ textAlign: 'left' }}>
            {team.school} {team.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamCard() {
  return (
    <div>
      {teams.teams.map((team) => (
        <div style={{ textAlign: 'left' }}>
          <p>School: {team.school}</p>
          <p>Mascot: {team.name}</p>
          <p>Location: {team.city}</p>
          <br></br>
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Heading />
      </header>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}
      >
        <TeamCard />
        <TeamList />
      </div>
    </div>
  );
}

export default App;
