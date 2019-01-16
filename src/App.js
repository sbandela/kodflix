import React, { Component } from 'react';

import blackmirrorlogo from './images/BlackMirror_logo.jpg'
import breakingbadlogo from './images/BreakingBad_logo.jpeg'
import deathnotelogo from './images/DeathNote_logo.jpg'
import fearthewalkingdeadlogo from './images/FearTheWalkingDead.jpg'
import gotlogo from './images/GOT_logo.jpeg'
import thwirelogo from './images/TheWire_logo.jpg'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <br /><br /><br />
        <div className='container1'>
          <div className='row1'>Black Mirror</div>
          <img src={blackmirrorlogo} alt='Blackmirror logo' />
          <div className='row1'>Breaking Bad</div>
          <img src={breakingbadlogo} alt='BreakingBad logo' />
          <div className='row1'>Death Note</div>
          <img src={deathnotelogo} alt='DeathNote logo' />
        </div>
        <div className='container2'>
          <div className='row2'>Game of Thrones</div>
          <img src={gotlogo} alt='GameofThrones logo' />
          <div className='row2'>The Walking Dead</div>
          <img src={fearthewalkingdeadlogo} alt='FearTheWalkingDead logo' />
          <div className='row2'>The Wire</div>
          <img src={thwirelogo} alt='TheWire logo' />
        </div>
      </div>
    );
  }
}

export default App;
