import React from 'react';
import PlayersList from './PlayersList';

function App() {
  return (
    <div className="App" style={{ backgroundColor: 'silver' }}> 
    <h1 style={{textAlign: 'center', color: 'darkblue', fontWeight: 'bold', fontStyle: 'italic', textShadow: '2px 2px 2px #000033'}}>FIFA Player</h1>
      <PlayersList />
    </div>
  );
}

export default App;
