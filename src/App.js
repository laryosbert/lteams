import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count => count + 1)
  }

  const deleteCount = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          Online user: {count}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={addCount}>
          Add user
        </button>
        <button onClick={deleteCount}>
          Delete user
        </button>
      </header>
    </div>
  );
}

export default App;
