import SongkickWrapper from './SongkickWrapper';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

songkick.getUpcomingEvents({
  from: 'users',
  id: 'mariane-marcelino',
  reason: 'tracked_artist',
  // optionalParams: {
  //   reason: 'tracked_artist',
  // },
  onload: () => {
    console.log(songkick.data);
  },
});
