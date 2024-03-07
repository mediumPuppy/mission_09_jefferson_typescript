import React from 'react';
import logo from './logo.svg';
import './App.css';
import teams from './CollegeBasketballTeams.json';

interface TeamsIF_ {
  school: string;
  name: string;
  city: string;
}

function Heading() {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <h1>College Basketball Teams</h1>
    </div>
  );
}

class Teams extends React.Component<TeamsIF_> {
  render() {
    const oneTeam = this.props;
    return (
      <div className="scrollable">
        <p>School: {oneTeam.school}</p>
        <p>Mascot: {oneTeam.name}</p>
        <p>Location: {oneTeam.city}</p>
      </div>
    );
  }
}

function TeamList() {
  return (
    <div className="scrollable">
      <p className="left">Teams</p>
      <ul>
        {teams.teams.map((oneTeam) => (
          <li>
            <Teams {...oneTeam} />
          </li>
        ))}
      </ul>
    </div>
  );
}

function TeamCard() {
  return (
    <div className="scrollable">
      <h2 className="left">School Details</h2>
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
        <div
          style={{
            width: '60%',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}
        >
          <TeamCard />
          <TeamList />
        </div>
      </header>
    </div>
  );
}

export default App;
