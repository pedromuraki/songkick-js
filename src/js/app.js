import { toggleClass, addClass, removeClass, nodelistToArray } from './utils';
import Songkick from './songkick';

const songkick = new Songkick({
  apiKey: 'KwvChI9jW9D3aYSd',
});

songkick.getUpcomingEvents({
  from: 'artists',
  id: '379603',
  optionalParams: {
    per_page: 3,
    page: 1,
  },
  onload: () => {
    console.log(songkick.data);
  }
});


