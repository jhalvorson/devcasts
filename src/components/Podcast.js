import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import PodcastOverview from './PodcastOverview';

class Podcast extends Component {
    render() {
        const { slug } = this.props.params;
        // index of the post
        const i = this.props.podcasts.findIndex((podcasts) => podcasts.slug === slug);
        const podcast = this.props.podcasts[i];// get us the post
        return (
            <div>
                <HomeHeader />
                <PodcastOverview i={i} podcast={podcast} {...this.props}/>
            </div>
        )
    }
}

export default Podcast;
