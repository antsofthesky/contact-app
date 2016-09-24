import React, { Component } from 'react';

import { connect } from 'react-redux';

import { removeContact } from '../actions/actions';

class Contact extends Component {

    remove(e) {
        e.preventDefault();

        this.props.dispatch(removeContact(this.props.contacts.id));
    }

    render() {
        return (
            <li className="contact">
                <p>First name: {this.props.contacts.firstName}</p>
                <p>Last name: {this.props.contacts.lastName}</p>
                <p>Email: {this.props.contacts.email}</p>
                <p><a href="#" onClick={e => this.remove(e)}>Remove</a></p>
            </li>
        );
    }
}

export default connect()(Contact);
