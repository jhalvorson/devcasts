import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class Footer extends Component {
    render() {
        return (
            <footer className="footer clearfix">
                <div className="column one">
                    <p>By <a href="//twitter.com/jamiehalvorson" target="_blank">@JamieHalvorson</a>, <br />Front End Developer at <a href="//twitter.com/cellosignal" target="_blank">@cellosignal</a></p>
                </div>
                <div className="column two">
                    <p>
                    {this.props.col_two}
                    </p>
                </div>
                <div className="column three">
                    <p>
                        <a href="//github.com/jhalvorson/devcasts" target="_blank">
                        View on GitHub
                        <FontAwesome
                            className=''
                            name='github'
                            size='2x'
                          />
                        </a>
                    </p>
                </div>
            </footer>
        )
    }
}

export default Footer;
