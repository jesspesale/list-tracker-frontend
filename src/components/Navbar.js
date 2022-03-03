import React from 'react'
import { Link } from 'react-router-dom'
import {logout} from "../redux/actions/authActions"
import { connect } from 'react-redux';

class Navbar extends React.Component {
    
    render(){
        console.log(this.props)
        return (
          <div className="navbar">
            <Link className="nav-item" to="/">
              Home
            </Link>

            {this.props.loggedIn ? (
              <>
                <Link className="nav-item" to="/dashboard">
                  Dashboard
                </Link>
                <Link
                  className="nav-item"
                  onClick={() => this.props.logout()}
                  to="/login"
                >
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="nav-item" to="/login">
                  Login
                </Link>
                <Link className="nav-item" to="/signup">
                  Signup
                </Link>
              </>
            )}
          </div>
        ); 
    }
}

const mapStateToProps = (state) => {
    return {
        loggedIn: state.auth.loggedIn
    }
}

export default connect(mapStateToProps, { logout })(Navbar);