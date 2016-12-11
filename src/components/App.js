import React, { Component } from 'react';
import logo from '../images/logo.svg';
import '../css/App.css';

//components

import HomeHeader from './HomeHeader';
import Card from './Card';

class App extends Component {
    render() {
        return (
          <div className="dev-casts">
                <HomeHeader />
                    <div className="card-list" id="card-list">
                        <div className="card-list__content">
                            {
                                Object
                                .keys(this.props.podcasts)
                                .map(key => <Card
                                                key={key}
                                                index={key}
                                                details={this.props.podcasts[key]}
                                                />)
                            }
                        </div>
                    </div>
          </div>
        );
    }
}

export default App;

/*
<div className="card-list" id="card-list">
    <div className="card-list__content">
        {
            Object
            .keys(this.props.podcasts)
            .map(key => <Card
                            key={key}
                            index={key}
                            details={this.props.podcasts[key]}
                            slug={this.props.params.slug}
                            />)
        }
    </div>
</div>
*/
