import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="column one">
                    <p>Made by @JamieHalvorson, <br />a Front End Developer at @cellosignal</p>
                </div>
                <div className="column two">
                    <p>
                    Missing some shit-hot podcast? <br />Hit me up on Twitter.
                    </p>
                </div>
                <div className="column three">
                    <p>View on GitHub</p>
                    <p>I wrote a thing on how I made this</p>
                </div>
            </footer>
        )
    }
}

export default Footer;
