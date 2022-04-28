import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import AppRoutes from  './Route/'

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="text-red-200">
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
        </header>
      </div>

      <Routes>
    </>
  );
}

export default App;
