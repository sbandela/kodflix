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
        <Tvshow name='BlackMirror' logo={blackmirrorlogo} />
        <Tvshow name='BreakingBad' logo={breakingbadlogo} />
        <Tvshow name='DeathNote' logo={deathnotelogo} />
      </div>
      <div className='container'>
        <Tvshow name='FearTheWalkingDead' logo={fearthewalkingdeadlogo} />
        <Tvshow name='GameOfThrones' logo={gotlogo} />
        <Tvshow name='TheWire' logo={thewirelogo} />
      </div>
    </div>
  )
}

