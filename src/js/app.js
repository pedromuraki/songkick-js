import SongkickWrapper from './SongkickWrapper';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

songkick.searchLocations({
  searchBy: {
    query: 'sao',
  }
}).then(response => {
  console.log(response, songkick.requestUrl);
});
