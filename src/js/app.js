import SongkickWrapper from './SongkickWrapper';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

songkick.searchLocations({
  searchBy: {
    query: 'artist+name',
    location: 'sk:<id>',
  },
  // onloadstart: () => {
  //   console.log('load start');
  // },
  onsuccess: () => {
    // console.log('success');
    console.log(songkick.data);
    console.log(songkick.requestUrl);
  },
  // onerror: () => {
  //   console.log('404');
  // }
});
