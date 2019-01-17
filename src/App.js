import React, { Component } from 'react';

import blackmirrorlogo from './images/BlackMirror_logo.jpg'
import breakingbadlogo from './images/BreakingBad_logo.jpeg'
import deathnotelogo from './images/DeathNote_logo.jpg'
import fearthewalkingdeadlogo from './images/FearTheWalkingDead.jpg'
import gotlogo from './images/GOT_logo.jpeg'
import thewirelogo from './images/TheWire_logo.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <br /><br /><br />
        <div className='container'>
          <div className='item'>
            <img src={blackmirrorlogo} alt="BlackMirrorLogo" />
            <div className='overlay'>
              <h1>Black Mirror</h1>
            </div>
          </div>
          <div className='item'>
            <img src={breakingbadlogo} alt='BreakingBadLogo' />
            <div className='overlay'>
              <h1>Breaking Bad</h1>
            </div>
          </div>
          <div className='item'>
            <img src={deathnotelogo} alt='DeathNoteLogo' />
            <div className='overlay'>
              <h1>Death Note</h1>
            </div>
          </div>
        </div>
        <div className='container'>
          <div className='item'>
            <img src={gotlogo} alt='GotLogo' />
            <div className='overlay'>
              <h1>Game of Thrones</h1>
            </div>
          </div>
          <div className='item'>
            <img src={fearthewalkingdeadlogo} alt='FearTheWalkingDeadLogo' />
            <div className='overlay'>
              <h1>Fear The Walking Dead</h1>
            </div>
          </div>
          <div className='item'>
            <img src={thewirelogo} alt='TheWireLogo' />
            <div className='overlay'>
              <h1>The Wire</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
