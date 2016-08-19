import React, { Component } from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div className="outer-container">
                <div className="page-header">
                    <h1>Hello, React World! <small>From Material Design with love</small></h1>
                </div>
                <div className="container">
                    <h2>Here's the body of the page</h2>
                    <button className="btn btn-primary">Press me</button><br/>
                    <button className="btn btn-danger">Do not touch me</button><br/>
                    <button className="btn btn-raised btn-info">Come closer</button><br/>
                    <button className="btn btn-raised btn-warning">Be gentle</button><br/>
                    <button className="btn btn-raised btn-success">I love it</button><br/>
                    <h1><a href="http://fezvrasta.github.io/bootstrap-material-design/bootstrap-elements.html">For more of Material Design, check me.</a></h1>
                </div>
            </div>
        );
    }
}

export default HelloWorld;
