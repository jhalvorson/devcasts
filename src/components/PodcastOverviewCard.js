import React, { Component } from 'react';

class PodcastOverviewCard extends Component {
    render() {
      const { details } = this.props
      const description = details.description.substring(0, 90)
        return (
            <div className="card">
              <header className="card-header">
                <span>{details.audio_files[0].duration}</span>
                <img src={details.image_urls.full} className="card-header__image" role="presentation"/>
              </header>
              <section className="card-body">
                <h2>{details.title}</h2>
                <p>{description}...</p><br/>
                <br/>
                <a href={details.audio_files[0].mp3} target="_blank">Listen</a><br/>
              </section>
            </div>
        )
    }
}

export default PodcastOverviewCard
