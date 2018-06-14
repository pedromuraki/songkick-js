import SongkickWrapper from './SongkickWrapper';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

songkick.getUpcomingEvents({
  from: 'artists',
  id: '42199',
  // reason: 'tracked_artist',
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
