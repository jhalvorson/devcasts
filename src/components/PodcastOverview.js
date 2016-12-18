import React, { Component } from 'react'
import PodcastOverviewCard from './PodcastOverviewCard'
import axios from 'axios'
import { Link } from 'react-router'
// import Audiosearch from 'audiosearch-client-node'
// import { AUDIOSEARCH_APP_ID, AUDIOSEARCH_SECRET } from '../AudioSearch'
// const audiosearch = new Audiosearch(
//   {AUDIOSEARCH_APP_ID: '785e8c4db6ee9b74a4b97a23c016065ff3cc344a26698438d6eda536e79b7b75'},
//   {AUDIOSEARCH_SECRET: '0fb310c82db1b4d3808d17f8a0d6690316b9ae328a015940b31d2508db3271fa'}
// )


class PodcastOverview extends Component {

    componentWillMount() {

    }
    render() {
        const { podcast } = this.props;
        function blurb() {
            return {__html: `${podcast.blurb}`}
        }
        return (
            <section className="podcast-overview">
                <section className="podcast-description">
                    <Link to="/">Back</Link>
                    <h1>{podcast.name}</h1>
                    <div dangerouslySetInnerHTML={blurb()}></div>
                </section>
                <section className="podcast-list card-list">
                    {
                        Object
                        .keys(this.props.episodes.results)
                        .map(key => <PodcastOverviewCard
                                        key={key}
                                        index={key}
                                        details={this.props.episodes.results[key]}
                                        />)
                    }
                </section>
            </section>
        )
    }
}

export default PodcastOverview;
