import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
class Team extends React.Component {
  render() {
    return (
      <div>This is our team</div>
    );
  }
}

export default connect()(Team);
