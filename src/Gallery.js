import React from 'react';
import Tvshow from './Tvshow';
import blackmirrorlogo from './images/BlackMirror_logo.jpg'
import breakingbadlogo from './images/BreakingBad_logo.jpeg'
import deathnotelogo from './images/DeathNote_logo.jpg'
import fearthewalkingdeadlogo from './images/FearTheWalkingDead.jpg'
import gotlogo from './images/GOT_logo.jpeg'
import thewirelogo from './images/TheWire_logo.jpg'


export default function Gallery() {
  return (
    <div>
      <div className='container'>
        <Tvshow id='black-mirror' name='BlackMirror' logo={blackmirrorlogo} />
        <Tvshow id='breaking-bad' name='BreakingBad' logo={breakingbadlogo} />
        <Tvshow id='death-note' name='DeathNote' logo={deathnotelogo} />
      </div>
      <div className='container'>
        <Tvshow id='fear-the-walking-dead' name='FearTheWalkingDead' logo={fearthewalkingdeadlogo} />
        <Tvshow id='game-of-thrones' name='GameOfThrones' logo={gotlogo} />
        <Tvshow id='the-wire' name='TheWire' logo={thewirelogo} />
      </div>
    </div>
  )
}

