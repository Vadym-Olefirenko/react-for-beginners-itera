import React from 'react';
import Bio from './myInfo.json';
import './App.css';

function App() {
  const {name, bio, contacts} = Bio;
  return (
    <div className="App">
      <header className="App-header">
        hello world!
        <h2> name: {name}</h2>
        <p>BIO : {bio}</p>
        <p>contacts: {contacts}</p>
      </header>
    </div>
  );
}

export default App;
