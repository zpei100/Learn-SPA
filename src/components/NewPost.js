import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewPost extends Component {
  renderForm(field) {
    return (
      <div>
        Hello
        <label>{field.label}</label>
        <input type="text" {...field.input} />
      </div>
    );
  }

  formSubmit(value) {
    console.log(value);
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(this.formSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderForm} />

        <Field label="Categories" name="Categories" component={this.renderForm} />

        <Field label="Content" name="Content" component={this.renderForm} />
        <button type="submit">Post!!!</button>
      </form>
    );
  }
}

function validate() {
  return {}
}


export default reduxForm({
  validate: validate,
  form: 'newPost'
})(NewPost);
