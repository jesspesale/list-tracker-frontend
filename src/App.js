import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import './App.css';
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Signup from "./components/Signup"
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import {checkLoggedIn} from "./redux/actions/authActions"
import {connect } from "react-redux"


// MUST INCLUDE credentials: 'include', IN EVERY FETCH CALL

class  App extends React.Component {

  state = {
    loading: true
  }

  componentDidMount() {
    this.props.checkLoggedIn(this.toggleLoading)
  }

  toggleLoading = () => {
    this.setState({loading: !this.state.loading})
  }

  render() {
    if(this.state.loading) return <h1>Loading...</h1>
    return (
      <div className="App">
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dashboard" render={(props) => {
              if(this.props.loggedIn) {
                return <Dashboard {...props} />
              } else {
                return <Redirect to='/login' />
              }
            }} 
            />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
          </Switch>
        </Router>
      </div>
    );
    }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, {checkLoggedIn})(App);
