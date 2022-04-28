import logo from './logo.svg';
import './App.css';
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppRoute from "./Route/index.js";

function App() {
  
  render(<BrowserRouter>
  
    <AppRoute>
      
    </AppRoute>
  </BrowserRouter>);

}

export default App;
