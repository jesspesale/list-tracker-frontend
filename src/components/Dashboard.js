import React from 'react'
import { connect } from 'react-redux';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );

  const mapStateToProps = (state) => {
    return {
      user: state.auth.currentIser
    }
  }
}
export default connect(mapStateToProps)(Dashboard)
