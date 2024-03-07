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
      <>
        <p>School: {oneTeam.school}</p>
        <p>Mascot: {oneTeam.name}</p>
        <p>Location: {oneTeam.city}</p>
      </>
    );
  }
}

function TeamList() {
  return (
    <div className="scrollable">
      <h2 className="left">List of Schools</h2>
      {teams.teams.map((team) => (
        <div style={{ textAlign: 'left' }}>
          <p>
            School: {team.school} {team.name}
          </p>
        </div>
      ))}
    </div>
  );
}

function TeamCard() {
  return (
    <div className="scrollable">
      <h2 className="left">Teams with info</h2>
      <ul style={{ padding: '0px' }}>
        {teams.teams.map((oneTeam) => (
          <li className="left" style={{ listStyleType: 'none' }}>
            <Teams {...oneTeam} />
          </li>
        ))}
      </ul>
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
