import React, { Component } from 'react'
import FontAwesome from 'react-fontawesome'

class Footer extends Component {
    render() {
        return (
            <footer className="footer clearfix">
                <div className="column one">
                    
                </div>
                <div className="column two">
                    <p><a href="//twitter.com/jamiehalvorson" target="_blank">@JamieHalvorson</a> | <a href="//halvorson.co.uk" target="_blank">halvorson.co.uk</a></p>
                </div>
                <div className="column three">
                    <p>
                        <a href="//github.com/jhalvorson/devcasts" target="_blank">
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
