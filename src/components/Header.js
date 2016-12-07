import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router';

class Header extends Component {
    render() {
        return (
            <nav className="navigation">
                <Link to="/githubId/faves" className="button button-faves">
                    <FontAwesome
                        name='heart'
                        size='2x'
                      />
                  ❤️
                </Link>
            </nav>
        )
    }
}

export default Header;
