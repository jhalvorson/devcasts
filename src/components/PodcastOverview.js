import React, { Component } from 'react'
import CardList from './CardList'

class PodcastOverview extends Component {
    render() {
        const { podcast } = this.props;
        function blurb() {
            return {__html: `${podcast.blurb}`}
        }
        return (
            <section className="podcast-overview">
                <section className="podcast-description">
                    <h1>{podcast.name}</h1>
                    <div dangerouslySetInnerHTML={blurb()}></div>
                </section>
                <section className="podcast-list">
                    <CardList {...this.props} />
                </section>
            </section>
        )
    }
}

export default PodcastOverview;
