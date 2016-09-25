import React, { Component } from 'react';

class Message extends Component {

    render() {
        return (
            <p className={this.props.showMsg ? 'show ' : 'hide ' + this.props.cssClass}>{this.props.text}</p>
        );
    }
}

export default Message;
