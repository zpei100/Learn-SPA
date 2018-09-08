import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class NewPost extends Component {
  renderForm(field) {
    //research {...field.input}
    //specifically look at the field.input array/object and look at each of the event handler definitions
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
    //handleSubmit is a property passed to this component via the link at the bottom
    //check out what handleSubmit does exactly and how it interacts with redux-form
    return (
      <form onSubmit={this.props.handleSubmit(this.formSubmit.bind(this))}>
        <Field label="Title" name="title" component={this.renderForm} />

        <Field
          label="Categories"
          name="Categories"
          component={this.renderForm}
        />

        <Field label="Content" name="Content" component={this.renderForm} />
        <button type="submit">Post!!!</button>
      </form>
    );
  }
}

function validate() {
  //implement details on error object

  return {};
}

//how does validate works behind the scene?
//what does the form property do?

export default reduxForm({
  validate: validate,
  form: 'newPost'
})(NewPost);
