import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div className="outer-container">
                <div className="page-header">
                    <h1>Hello, React World! <small>Expore React inside out</small></h1>
                </div>
                <div className="container">
                    <h2>Here's the body of the page</h2>
                    <button className="btn btn-primary">Press me</button>
                </div>
            </div>
        );
    }
}

export default HelloWorld;
