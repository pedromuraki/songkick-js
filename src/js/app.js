import SongkickWrapper from './SongkickWrapper';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

songkick.searchEvents({
  searchBy: {
    location: 'sk:27274',
  },
  optionalParams: {
    type: 'Concert',
  },
  onloadstart: () => {
    console.log('load start');
  },
  onsuccess: () => {
    console.log('success');
    console.log(songkick.data);
    console.log(songkick.requestUrl);
  },
  on404: () => {
    console.log('404');
  }
});
