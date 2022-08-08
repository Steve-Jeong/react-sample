import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h2>Count : {count}</h2>
        <div>
          <button onClick={() => setCount(prev => prev + 1)}>Increase</button>
          <button onClick={() => setCount(prev => prev - 1)}>Decrease</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>


      </header>
    </div>
  );
}

export default App;
