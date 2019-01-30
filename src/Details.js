import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Details extends Component {

  constructor() {
    super();
    this.state = {
      welcomeMessage: 'This is the TV show details page!!'
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
welcomeMessage: 'The is the message as the state changed!'
      });
      this.state.welcomeMessage = 'The is the message as the state changed!'
    }, 3000);
  }
  render() {
    return (
      <div>
        <h1>{this.state.welcomeMessage}</h1>
        <Link to='/'>Back to the Home Page</Link>
      </div>
    )
  }
}


