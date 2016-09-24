import React from 'react';

const Footer = React.createClass({
    render() {
        return (
            <div className="container center-align">
                <p>Contact App &copy; {this.props.date.getFullYear()}</p>
            </div>
        );
    }
});

export default Footer;
