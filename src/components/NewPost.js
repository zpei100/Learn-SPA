import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class NewPost extends Component {
  renderForm(field) {
    console.log(field);
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

  //fields.input basically contains all of the fields properties. the field here represents the Field component itself
  //field.input contains all properties passed into it: in the examples below, include label and name
  //also, there are 'native' field properties like onChange, onBlur, etc.. : event handlers that come with Field from the redux-form library. They will disdpatch an action to the redux store, caught by the formReducer, and then have a state returned
  //at home, study the onChange event handlers of field.inputz

  formSubmit(value) {}

  render() {
    //handleSubmit is a property passed to this component via the link at the bottom
    //check out what handleSubmit does exactly and how it interacts with redux-form

    // the ...field.input is a 'list' of event handlers that fire a dispatch, with an action created, to the redux store
    // then the formReducer handles the action and returns a new state, and that state is passed in back to the input component. How exactly is this part done?

    //it seems only the component property (takes a callback function that returns a component) has access to 'field'
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

function mapStateToProps(state) {
  return { formData: state.form };
}

//how does validate works behind the scene?
//what does the form property do?
export default reduxForm({
  validate: validate,
  form: 'newPost'
})(connect(mapStateToProps)(NewPost));
