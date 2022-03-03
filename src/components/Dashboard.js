import React from 'react'
import { connect } from 'react-redux';

const Dashboard = ({user})=> {
  
  return (
    <div>
      <h2>Dashboard</h2>
      <h4>Welcome {user.email}</h4>
    </div>
  );
}
  const mapStateToProps = (state) => {
    return {
      user: state.auth.currentUser,
    };
  };

export default connect(mapStateToProps)(Dashboard);
