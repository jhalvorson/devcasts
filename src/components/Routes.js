import React, { Component } from 'react'
import { BrowserRouter, Match, Miss } from 'react-router'

import App from './App'
import Podcast from './Podcast'
import NotFound from './NotFound'
import Faves from './Faves'
import Header from './Header'
import Footer from './Footer'

import '../css/index.css';

import podcasts from '../dummy-data';

class Routes extends Component {

    constructor() {
        super();

        this.state = {
            podcasts: {}
        }
    }
    componentWillMount() {
        this.setState({
            podcasts
        })
    }

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Match exactly pattern="/" render={(props) => <App {...props} podcasts={this.state.podcasts} />}/>
                    <Match pattern="/podcast/:slug" render={(props) => <Podcast {...props} podcasts={this.state.podcasts} />} />
                    <Match pattern="/githubId/faves" component={Faves} />
                    <Footer />
                </div>
            </BrowserRouter>
        )
    }
}

export default Routes
