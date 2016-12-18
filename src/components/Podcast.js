import React, { Component } from 'react'
import axios from 'axios'
import HomeHeader from './HomeHeader'
import PodcastOverview from './PodcastOverview'
import shopTalkData from '../shop-talk-data'
import 'whatwg-fetch'

class Podcast extends Component {

    constructor(props) {
        super(props);

        this.state = {
            episodes: []
        }
    }
    componentWillMount() {
      // const apiName = 'shoptalk'
      // var self = this;
      // axios({
      //   url:'https://api.mixcloud.com/'+`${apiName}`+'/feed/',
      //   method: 'get'
      // })
      // .then(response => {
      //   console.log(response.data.data);
      //   this.setState({
      //     episodes: response.data.data
      //   })
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });

      this.setState({
          episodes: shopTalkData
      })
    }

    componentDidMount() {
        window.scrollTo(0, 0) 
    }
    render() {
      const { slug } = this.props.params;
      // index of the post
      const i = this.props.podcasts.findIndex((podcasts) => podcasts.slug === slug);
      const podcast = this.props.podcasts[i];// get us the post

      return (
          <div>
              <PodcastOverview i={i} episodesExtra={this.state.episodesExtra} episodes={this.state.episodes} podcast={podcast} {...this.props}/>
          </div>
      )
  }
}

export default Podcast;
