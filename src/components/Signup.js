import React, { Component } from 'react'

export default class Signup extends Component {
  render() {
    return (
      <div>
        <h2>Signup Below:</h2>
        <form>
            <label>Email</label>
          <input type="text" />
          <br />
          <label>Password</label>
          <input type="text" />
          <br />
          <label>Confirm Password</label>
          <input type="text" />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

