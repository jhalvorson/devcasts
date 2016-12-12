import React, { Component } from 'react'
import HomeHeader from './HomeHeader'
import PodcastOverview from './PodcastOverview'
import shopTalkData from '../shop-talk-data'

class Podcast extends Component {

    constructor() {
        super();

        this.state = {
            episodes: []
        }
    }
    componentWillMount() {
        this.setState({
            episodes: shopTalkData
        })
    }

    render() {
        const { slug } = this.props.params;
        // index of the post
        const i = this.props.podcasts.findIndex((podcasts) => podcasts.slug === slug);
        const podcast = this.props.podcasts[i];// get us the post
        return (
            <div>
                <HomeHeader />
                <PodcastOverview i={i} episodes={this.state.episodes} podcast={podcast} {...this.props}/>
            </div>
        )
    }
}

export default Podcast;
