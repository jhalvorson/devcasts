import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';
import data from '../dummy-data';

//components

import HomeHeader from './HomeHeader';
import Card from './Card';

class App extends Component {
    constructor() {
        super();

        this.state = {
            podcasts: {}
        }
    }
    componentWillMount() {
        this.setState({
            podcasts: data
        })
    }
    render() {
        return (
          <div className="dev-casts">
                <HomeHeader />
                <div className="card-list">
                {
                    Object
                    .keys(this.state.podcasts)
                    .map(key => <Card
                                    key={key}
                                    index={key}
                                    details={this.state.podcasts[key]}
                                    slug={this.props.params.slug}
                                    />)
                }
                </div>
          </div>
        );
    }
}

export default App;
