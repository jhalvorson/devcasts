import React, { Component } from 'react';

class PodcastOverview extends Component {
    render() {
        return (
            <section className="podcast-overview">
                <section className="podcast-description">
                    <h1>The Shop Talk Show</h1>

                    <p>Brought to you by Chris Coyier or the CodePen dynasty and #davegoeswindows, the shoptalk show covers everything web development. Seriously. These guys talk about everything.</p>

                    <p>From complex deployments to WordPress, or from Jekyll to accessibility.</p>

                    <p>Their Quickfire shows see them run through as many questions as possible within the hour.</p>

                    <p>Chuck this on x2 and listen to it on your commute - you won’t be dissapointed, or your money back.</p>


                    <p>*There may or may not be any money</p>

                    <p>**Nope, just checked, there’s no money.</p>
                </section>
            </section>
        )
    }
}

export default PodcastOverview;
