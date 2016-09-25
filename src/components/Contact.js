import React, { Component } from 'react';

class Contact extends Component {

    render() {
        return (
            <li className="contact">
                <p>First name: {this.props.contacts.firstName}</p>
                <p>Last name: {this.props.contacts.lastName}</p>
                <p>Email: {this.props.contacts.email}</p>
                <p><a href="#" onClick={e => {
                    e.preventDefault()
                    this.props.removeContact(this.props.contacts.id);
                }}>Remove</a></p>
            </li>
        );
    }
}

export default Contact;
