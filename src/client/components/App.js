import React, { PropTypes } from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h3>MY FEATHERS-REACT APP</h3>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
