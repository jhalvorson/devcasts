import React, { Component } from 'react'
import '../css/App.css'

import HomeHeader from './HomeHeader'
import CardList from './CardList'

class App extends Component {
    render() {
        return (
          <div className="dev-casts clearfix">
                <HomeHeader />
                    <div className="card-list" id="card-list">
                        <div className="card-list__content">
                            <CardList {...this.props} />
                        </div>
                    </div>
          </div>
        );
    }
}

export default App;
