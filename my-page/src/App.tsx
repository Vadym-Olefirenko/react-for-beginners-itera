import React from 'react';
import Bio from './myInfo.json';
import './App.css';
import { Information } from './Information';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Information name={Bio.name} bio={Bio.bio} contacts={Bio.contacts}/>
      </header>
    </div>
  );
}

export default App;
