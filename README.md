# Songkick Wrapper.

[![Build Status](https://travis-ci.org/pedromuraki/songkick-wrapper.svg?branch=master)](https://travis-ci.org/pedromuraki/songkick-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/pedromuraki/songkick-wrapper/badge.svg?branch=master)](https://coveralls.io/github/pedromuraki/songkick-wrapper?branch=master)

> A javascript wrapper library to work with the [Songkick](https://www.songkick.com/) API.

## Getting Started

### Installation

Install with npm / Include the script located on the `dist` folder

### Initializing

Create a new instance of the SongkickWrapper class passing your API key as parameter. You can request an API key [here](https://www.songkick.com/api_key_requests/new).

```js
// import the lib
import SongkickWrapper from 'SongkickWrapper';
// or
const SongkickWrapper = require('SongkickWrapper');

// create an instance of SongkickWrapper with your API key
const songkick = new SongkickWrapper('your-api-key');
```

## How it works

All methods makes an AJAX request to the Songkick API and returns a promise with a JSON object containing the data received.

Example using the `getUpcomingEvents` method:

````
songkick.getUpcomingEvents({
  from: 'artists',
  id: '379603', // id for rolling stones
}).then(data => {
  console.log(data);
});
````
Returns the response:

````
{"status":"ok","results":{"event":[{"type":"Concert","popularity":0.473291,"displayName":"The Rolling Stones at Mercedes-Benz Arena (June 30, 2018)","status":"ok","performance":[{"displayName":"The Rolling Stones","billingIndex":1,"billing":"headline","artist":{"displayName":"The Rolling Stones","identifier":[{"href":"http://api.songkick.com/api/3.0/artists/mbid:b071f9fa-14b0-4217-8e97-eb41da73f598.json","mbid":"b071f9fa-14b0-4217-8e97-eb41da73f598"},{"href":"http://api.songkick.com/api/3.0/artists/mbid:a52940ca-3ec9-4a2b-89e4-ad358f64c8f7.json","mbid":"a52940ca-3ec9-4a2b-89e4-ad358f64c8f7"}],"uri":"http://www.songkick.com/artists/379603-rolling-stones?utm_source=48647&utm_medium=partner","id":379603},"id":63462749}],"ageRestriction":null,"start":{"datetime":null,"time":null,"date":"2018-06-30"},"location":{"city":"Stuttgart, Germany","lat":48.7908464,"lng":9.2313422},"uri":"http://www.songkick.com/concerts/32988509-rolling-stones-at-mercedesbenz-arena?utm_source=48647&utm_medium=partner","id":32988509,"venue":{"displayName":"Mercedes-Benz Arena","lat":48.7908464,"lng":9.2313422,"metroArea":{"displayName":"Stuttgart","country":{"displayName":"Germany"},"uri":"http://www.songkick.com/metro_areas/28591-germany-stuttgart?utm_source=48647&utm_medium=partner","id":28591},"uri":"http://www.songkick.com/venues/508341-mercedesbenz-arena?utm_source=48647&utm_medium=partner","id":508341}},{"type":"Concert","popularity":0.473291,"displayName":"The Rolling Stones at Letnany Airport (July 4, 2018)","status":"ok","performance":[{"displayName":"The Rolling Stones","billingIndex":1,"billing":"headline","artist":{"displayName":"The Rolling Stones","identifier":[{"href":"http://api.songkick.com/api/3.0/artists/mbid:b071f9fa-14b0-4217-8e97-eb41da73f598.json","mbid":"b071f9fa-14b0-4217-8e97-eb41da73f598"},{"href":"http://api.songkick.com/api/3.0/artists/mbid:a52940ca-3ec9-4a2b-89e4-ad358f64c8f7.json","mbid":"a52940ca-3ec9-4a2b-89e4-ad358f64c8f7"}],"uri":"http://www.songkick.com/artists/379603-rolling-stones?utm_source=48647&utm_medium=partner","id":379603},"id":63462769}],"ageRestriction":null,"start":{"datetime":null,"time":null,"date":"2018-07-04"},"location":{"city":"Prague, Czech Republic","lat":50.136703,"lng":14.5147525},"uri":"http://www.songkick.com/concerts/32988519-rolling-stones-at-letnany-airport?utm_source=48647&utm_medium=partner","id":32988519,"venue":{"displayName":"Letnany Airport","lat":50.136703,"lng":14.5147525,"metroArea":{"displayName":"Prague","country":{"displayName":"Czech Republic"},"uri":"http://www.songkick.com/metro_areas/28425-czech-republic-prague?utm_source=48647&utm_medium=partner","id":28425},"uri":"http://www.songkick.com/venues/3049229-letnany-airport?utm_source=48647&utm_medium=partner","id":3049229}},{"type":"Concert","popularity":0.473291,"displayName":"The Rolling Stones at PGE Narodowy (July 8, 2018)","status":"ok","performance":[{"displayName":"The Rolling Stones","billingIndex":1,"billing":"headline","artist":{"displayName":"The Rolling Stones","identifier":[{"href":"http://api.songkick.com/api/3.0/artists/mbid:b071f9fa-14b0-4217-8e97-eb41da73f598.json","mbid":"b071f9fa-14b0-4217-8e97-eb41da73f598"},{"href":"http://api.songkick.com/api/3.0/artists/mbid:a52940ca-3ec9-4a2b-89e4-ad358f64c8f7.json","mbid":"a52940ca-3ec9-4a2b-89e4-ad358f64c8f7"}],"uri":"http://www.songkick.com/artists/379603-rolling-stones?utm_source=48647&utm_medium=partner","id":379603},"id":63462779}],"ageRestriction":null,"start":{"datetime":null,"time":null,"date":"2018-07-08"},"location":{"city":"Warsaw, Poland","lat":52.239469,"lng":21.0458004},"uri":"http://www.songkick.com/concerts/32988529-rolling-stones-at-pge-narodowy?utm_source=48647&utm_medium=partner","id":32988529,"venue":{"displayName":"PGE Narodowy","lat":52.239469,"lng":21.0458004,"metroArea":{"displayName":"Warsaw","country":{"displayName":"Poland"},"uri":"http://www.songkick.com/metro_areas/31787-poland-warsaw?utm_source=48647&utm_medium=partner","id":31787},"uri":"http://www.songkick.com/venues/3159554-pge-narodowy?utm_source=48647&utm_medium=partner","id":3159554}}]},"perPage":50,"page":1,"totalEntries":3}
```
