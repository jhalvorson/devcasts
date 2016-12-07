import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import PodcastOverview from './PodcastOverview';

class Podcast extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <PodcastOverview />
            </div>
        )
    }
}

export default Podcast;
