import React, { PropTypes } from 'react';
import { IndexLink, Link } from 'react-router';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>MY FEATHERS-REACT APP</h3>
        <div className="ui secondary pointing menu">
          <IndexLink className="item" to="/">Home</IndexLink>
          <Link className="item" to="/team">Team</Link>
          <div className="right menu">
            <Link to="/signup" className="ui item">Signup</Link>
            <Link to="/logout" className="ui item">Logout</Link>
          </div>
        </div>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
