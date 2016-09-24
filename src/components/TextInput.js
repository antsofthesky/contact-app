import React from 'react';

const TextInput = React.createClass({
    render() {
        return (
            <li className="form-field">
                <label htmlFor={this.props.name}>{this.props.label}</label>
                <input
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    required />
                {/* Instead of type out all the properties and map them to their correct fields, you can use the spread operator here
                    as long as the property comes in correctly from the parent.  */}
            </li>
        );
    }
});

export default TextInput;
