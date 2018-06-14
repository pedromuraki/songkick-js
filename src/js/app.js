import SongkickWrapper from './SongkickWrapper';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

songkick.getUpcomingEvents({
  from: 'users',
  id: 'pedromuraki',
  reason: 'tracked_artist',
  optionalParams: {
    min_date: 'dasdas'
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
