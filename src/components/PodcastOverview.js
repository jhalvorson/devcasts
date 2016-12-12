import React, { Component } from 'react'
// var Audiosearch = require('audiosearch-client-node')
// import { AUDIOSEARCH_APP_ID, AUDIOSEARCH_SECRET } from '../AudioSearch'
// const AUDIOSEARCH_APP_ID = '785e8c4db6ee9b74a4b97a23c016065ff3cc344a26698438d6eda536e79b7b75';
// const AUDIOSEARCH_SECRET = '0fb310c82db1b4d3808d17f8a0d6690316b9ae328a015940b31d2508db3271fa';
// var audiosearch = new Audiosearch(process.env.AUDIOSEARCH_APP_ID, process.env.AUDIOSEARCH_SECRET)


class Temp extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.details.title}</h1>
                {this.props.details.description}<br/>
                {this.props.details.image_urls.full}<br/>
                {this.props.details.digital_location}<br/>
            </div>
        )
    }
}

class PodcastOverview extends Component {

    componentWillMount() {

    }
    render() {
        const { podcast } = this.props;
        const { results } = this.props.episodes;
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
                    {
                        Object
                        .keys(this.props.episodes.results)
                        .map(key => <Temp
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
