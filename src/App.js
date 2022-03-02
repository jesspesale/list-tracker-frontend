import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup"
import Login from "./components/Login";
import Navbar from "./components/Navbar";

class  App extends React.Component {

  componentDidMount() {
    this.checkLoginStatus()
  }

  checkLoginStatus = () => {
    fetch('http://localhost:3001/logged_in', {
      credentials: 'include',
    })
      .then(res => res.json())
      .then(data => console.log(data))

  }

  render() {
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
    }
}

export default App;
