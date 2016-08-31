import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h3>HOME</h3>
        <p>This is m home page</p>
        <hr/>
        Meet our team <Link to="/team">here</Link>
      </div>
    );
  }
}

export default Home;
