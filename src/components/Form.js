import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextInput from './TextInput';
import Button from './Button';

import { addContact } from '../actions/actions';

class Form extends Component {


    submit(e) {
        e.preventDefault();

        // Target the form using the ref on it
        let formValues = this.refs.form;
        let values = {};

        // Because formValues also contains the form button, weed that out and create key value pairs of the field name and value
        for(var i = 0; i < formValues.length; i++) {
            if(formValues[i].type === "text" || formValues[i].type === "email") {
                values[formValues[i].name] = formValues[i].value;
            }
        }

        // Clear the form
        e.currentTarget.reset();

        // Send the form values to the action
        this.props.dispatch(addContact(values));

    }


    render() {
        return (
            <div className="create-contact center-align">
                <h2>Add a Contact</h2>
                <form className="form" action={this.props.action} onSubmit={e => this.submit(e)} ref="form">
                    <ul>
                        <TextInput type="text" label="First Name" name="firstName" placeholder="Enter a first name" ref="formInput"/>
                        <TextInput type="text" label="Last Name" name="lastName" placeholder="Enter a last name" ref="formInput"/>
                        <TextInput type="email" label="Email" name="email" placeholder="Enter an email" ref="formInput"/>
                    </ul>
                    <Button class="btn submit-btn" text="Submit" />
                </form>
            </div>
        );
    }

};

export default connect()(Form);
