import React, { Component } from 'react'
import Card from './Card'

class CardList extends Component {
    render() {
        return (
            <div className="card-list" id="card-list">
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
        )
    }
}

export default CardList
