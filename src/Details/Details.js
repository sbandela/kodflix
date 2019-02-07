import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import getGallery from '../Gallery-get';
import './Details.css'

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
        <div className='Details'>
          <h1>{this.state.gallery.name}</h1>
          <div className='content'>
            <div className='text'>{this.state.gallery.details}</div>
            <img
              className='image'
              src={this.state.gallery.logo}
              alt={this.state.gallery.name} />
          </div>

          <Link to='/'>Back to the Home Page</Link>
        </div>
      )

    }

  }
}


