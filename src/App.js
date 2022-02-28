import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          {/* <Route exact path="/dashboard" component={Home} /> */}
        </Routes>
        <h1>React App</h1>
      </Router>
    </div>
  );
}

export default App;
