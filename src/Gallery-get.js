import blackmirrorlogo from './images/BlackMirror_logo.jpg';
import breakingbadlogo from './images/BreakingBad_logo.jpeg';
import deathnotelogo from './images/DeathNote_logo.jpg';
import fearthewalkingdeadlogo from './images/FearTheWalkingDead.jpg';
import gotlogo from './images/GOT_logo.jpeg';
import thewirelogo from './images/TheWire_logo.jpg';

export default function getGallery() {
    return [
      { id: 'black-mirror', name: 'BlackMirror', logo: blackmirrorlogo },
      { id: 'breaking-bad', name: 'BreakingBad', logo: breakingbadlogo },
      { id: 'death-note', name: 'DeathNote', logo: deathnotelogo },
      { id: 'fear-the-walking-dead', name: 'FearTheWalkingDead', logo: fearthewalkingdeadlogo },
      { id: 'game-of-thrones', name: 'GameOfThrones', logo: gotlogo },
      { id: 'the-wire', name: 'TheWire', logo: thewirelogo }
  
    ];
  }