import SongkickWrapper from './SongkickWrapper';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

// songkick.getUserTrackings({
//   username: 'mariane-marcelino',
//   of: 'artists',
//   onload: () => {
//     console.log('getUserTrackings')
//     console.log(songkick.data);
//     console.log(songkick.requesUrl);
//   },
// });

// songkick.getUpcomingEvents({
//   from: 'artists',
//   id: '2860076',
//   onload: () => {
//     console.log('getUpcomingEvents')
//     console.log(songkick.data);
//     console.log(songkick.requesUrl);
//   },
// });

// songkick.getUpcomingEvents({
//   from: 'users',
//   id: 'mariane-marcelino',
//   reason: 'tracked_artist',
//   onload: () => {
//     console.log('getUpcomingEvents')
//     console.log(songkick.data);
//     console.log(songkick.requestUrl);
//   },
// });

// songkick.getPastEvents({
//   from: 'users',
//   id: 'mariane-marcelino',
//   onload: () => {
//     console.log('getPastEvents')
//     console.log(songkick.data);
//     console.log(songkick.requestUrl);
//   },
// });

songkick.isUserTracking({
  username: 'mariane-marcelino',
  trackingObject: 'artist',
  id: '72952843123131231',
  onloadstart: () => {
    console.log('load start');
  },
  onsuccess: () => {
    console.log('success');
  },
  on404: () => {
    console.log('404');
  }
});
