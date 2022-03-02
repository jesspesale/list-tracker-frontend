import React from 'react'
import { Link } from 'react-router-dom'
import {logout} from ".././redux/actions/authActions"
import { connect } from 'react-redux';

class Navbar extends React.Component {

    render(){
        return (
            <div className="navbar">
                <Link className="nav-item" to="/">
                Home
                </Link>
                <Link className="nav-item" to="/dashboard">
                Dashboard
                </Link>
                <Link className="nav-item" to="/login">
                Login
                </Link>
                <Link className="nav-item" to="/signup">
                Signup
                </Link>
                <Link className="nav-item" onClick={() => this.props.logout} to="/">
                Logout88
                </Link>
            </div>
        );
    }  
}

export default connect(null, {logout})(Navbar)