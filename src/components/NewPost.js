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

  render() {
    return (
      <form>
        <Field label="Title" name="title" component={this.renderForm} />

        <Field label="Categories" name="title" component={this.renderForm} />

        <Field label="Content" name="title" component={this.renderForm} />
      </form>
    );
  }
}

export default reduxForm(
  {
    form: 'newPost'
  },
)(NewPost);
