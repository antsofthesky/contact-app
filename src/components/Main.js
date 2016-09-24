import React, { Component } from 'react';

import Header from './Header';
import Footer from './Footer';

class Main extends Component {
    render() {
        return (
            <div className="App">
                <Header />

                <div className="container">
                    {this.props.children}
                </div>

                <Footer date={new Date()} />
            </div>
        );
    };
}

export default Main;
