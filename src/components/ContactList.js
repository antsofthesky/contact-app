import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router';

import Contact from './Contact';

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

class ContactList extends Component {

    render() {
        let hasContacts = undefined;
        if(this.props.contacts.length) {
            hasContacts = true;
        }
        return (
            <div className="contacts center-align">
                <h2>Your Contacts</h2>

                {hasContacts
                    ? <ul className="contacts-grid">
                        {this.props.contacts.map((contact, i) =>
                            <Contact key={i} contacts={contact} />
                        )}
                    </ul>
                    : <p>You have no contacts. <Link to="/new">Add some</Link>.</p>
                }

            </div>
        );
    }
}

export default connect(mapStateToProps)(ContactList);
