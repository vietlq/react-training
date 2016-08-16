import React, { Component } from 'react';

class Thumbnail extends Component {
    onClick(event) {
        event.preventDefault();
    }

    render() {
        const { small_url, large_url, alt_text } = this.props.thumb;

        return (
            <div className="thumbnail">
                <a href="#" onClick={this.onClick.bind(this)}>
                    <img src={small_url} alt={alt_text} />
                </a>
            </div>
        );
    }
}

export default Thumbnail;
