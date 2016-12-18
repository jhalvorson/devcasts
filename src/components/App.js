import React, { Component } from 'react'
import '../css/App.css'

import HomeHeader from './HomeHeader'
import CardList from './CardList'

class App extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render() {
        return (
          <div className="dev-casts clearfix">
                <HomeHeader />
                <CardList {...this.props} />
          </div>
        );
    }
}

export default App;
