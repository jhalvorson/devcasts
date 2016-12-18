import React, { Component } from 'react';
import { Link } from 'react-router';

class CardHeader extends Component {
  render() {
    return (
      <header className="card-header">
        <img src={this.props.image} className="card-header__image" role="presentation"/>
      </header>
    )
  }
}

class CardBody extends Component {
  render() {
    return (
      <section className="card-body">
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <div className="card-listen">
          <Link to={`/podcast/${this.props.slug}`}>Listen to {this.props.name}</Link>          
        </div>
      </section>
    )
  }
}

class Card extends Component {
  render() {
    return (
      <article className="card">
        <CardHeader {...this.props.details}/>
        <CardBody {...this.props.details}/>
      </article>
    )
  }
}

export default Card;
