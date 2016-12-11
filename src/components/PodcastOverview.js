import React, { Component } from 'react';

class PodcastOverview extends Component {
    render() {
        const { podcast, i } = this.props;
        function blurb() {
            return {__html: `${podcast.blurb}`}
        }
        return (
            <section className="podcast-overview">
                <section className="podcast-description">
                    <h1>{podcast.name}</h1>


                    <div dangerouslySetInnerHTML={blurb()}></div>
                </section>
            </section>
        )
    }
}

export default PodcastOverview;
