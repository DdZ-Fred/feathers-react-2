import React, { PropTypes } from 'react';
const propTypes = {

};

function Signup() {
  return (
    <div>
      <form action="/signup" className="ui form">
        <div className="field">
          <label htmlFor="email">Email:</label>
          <input type="text" placeholder="Enter your email" {...email} />
        </div>
        <div className="field">
          <label htmlFor="password">Password:</label>
          <input type="text" placeholder="Enter your password" {...password} />
        </div>
        <button className="ui button" type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
