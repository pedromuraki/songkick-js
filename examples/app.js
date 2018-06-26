import SongkickWrapper from '../src/SongkickWrapper';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

songkick.getUserTrackings({
  username: 'pedromuraki',
  trackingObject: 'artists',
  optionalParams: {
    page: 1,
    per_page: 10,
    fields: 'id,displayName',
    created_after: '2018-02-28T13:37:00Z',
  },
}).then(data => {
  console.log(data);
});
