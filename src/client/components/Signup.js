import React, { PropTypes } from 'react';
import { withFeathers } from 'feathers-react-helpers';
import { Field, reduxForm } from 'redux-form';
// import axios from 'axios';

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
};

function renderField({ input, label, type, placeholder, meta: { touched, error } }) {
  return (
    <div className={touched && error ? 'field error' : 'field'}>
      <label htmlFor={input.name}>{`${label}:`}</label>
      <input id={input.name} {...input} type={type} placeholder={placeholder}/>
      {
        touched && error &&
        <div className="ui error message">{error}</div>
      }
    </div>
  );
}

class Signup extends React.Component {

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(fields) {
    console.log(fields);
    // this.props.feathers.service('users').create(fields)
    //  .then((user) => {
    //    console.log('Data', user);
    //  });
    this.props.feathers.service('users').create(fields).then(user => console.log(user));
  }

  render() {
    const { handleSubmit, submitting, valid } = this.props;
    let formStyle = 'ui form';
    if (!valid) {
      formStyle += ' error';
    }
    if (submitting) {
      formStyle += ' loading';
    }

    return (
      <div>

        <h3>Signup Form</h3>
        <form
          className={formStyle}
          onSubmit={handleSubmit(this.handleSubmit)}>
          <Field
            name="email"
            component={renderField}
            type="email"
            label="Email"
            placeholder="Enter your email" />
          <Field
            name="password"
            component={renderField}
            type="password"
            label="Password"
            placeholder="Enter your password" />
          <button
            className="ui button"
            type="submit"
            disabled={submitting}>Submit</button>
        </form>
      </div>
    );
  }
}

Signup.propTypes = propTypes;

function validate(values) {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  validate,
})(withFeathers(Signup));
