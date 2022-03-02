import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="navbar">
      <Link className="nav-item" to="/">
        Home
      </Link>
      <Link className="nav-item" to="/dashboard">
        Dashboard
      </Link>
      <Link className="nav-item" to="/login">
        Signup
      </Link>
    </div>
  );
}
