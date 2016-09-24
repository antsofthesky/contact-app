import React, { Component } from 'react';

import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <div className="App-header center-align">
                <div className="container">
                    <Link to="/new" activeClassName="active">Add Contact</Link>
                    <Link to="/contacts" activeClassName="active">View Contacts</Link>
                </div>
            </div>
        );
    }
}

export default Header;
