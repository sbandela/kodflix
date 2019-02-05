import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from './Gallery-get';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      gallery: {}
    }
  }

  componentDidMount() {
    let tvshowid = this.props.match.params.tvshowid;
    let gallery = getGallery().find((gallery) => gallery.id === tvshowid);
    this.setState({ gallery });

  }
  render() {
    if (this.state.gallery === undefined) {
      return <Redirect to='/not-found' />

    } else {
      return (
        <div>
          <h1>{this.state.gallery.name}</h1>
          <Link to='/'>Back to the Home Page</Link>
        </div>
      )

    }

  }
}


