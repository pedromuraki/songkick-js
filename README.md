# Songkick Wrapper.

[![Build Status](https://travis-ci.org/pedromuraki/songkick-wrapper.svg?branch=master)](https://travis-ci.org/pedromuraki/songkick-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/pedromuraki/songkick-wrapper/badge.svg?branch=master)](https://coveralls.io/github/pedromuraki/songkick-wrapper?branch=master)

> A javascript wrapper library to work with the [Songkick](https://www.songkick.com/) API.

## Getting Started

### Installation

Install with npm / Include the script located on the `dist` folder in your application file

### Initializing

Create a new instance of the SongkickWrapper class passing your API key as parameter. You can request an API key [here](https://www.songkick.com/api_key_requests/new).

```js
const songkick = new SongkickWrapper('your-api-key');
```

## Methods

All methods makes an AJAX request to the Songkick API and returns a promise with a JSON object containing the data received. Example of response:

````
{
  "results": {
    "event": [
      {
        "id":11129128,
        "type":"Concert",
        "uri":"http://www.songkick.com/concerts/11129128-wild-flag-at-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
        "displayName":"Wild Flag at The Fillmore (April 18, 2012)",
        "start": {
          "time":"20:00:00",
          "date":"2012-04-18",
          "datetime":"2012-04-18T20:00:00-0800"
        },
        "performance": [
          {
            "artist": {
              "id":29835,
              "uri":"http://www.songkick.com/artists/29835-wild-flag?utm_source=PARTNER_ID&utm_medium=partner",
              "displayName":"Wild Flag",
              "identifier": []
            },
            "id":21579303,
            "displayName":"Wild Flag",
            "billingIndex":1,
            "billing":"headline"
          }
        ],
        "location": {
          "city":"San Francisco, CA, US",
          "lng":-122.4332937,
          "lat":37.7842398
        },
        "venue": {
          "id":6239,
          "displayName":"The Fillmore",
          "uri":"http://www.songkick.com/venues/6239-fillmore?utm_source=PARTNER_ID&utm_medium=partner",
          "lng":-122.4332937,
          "lat":37.7842398,
          "metroArea": {
            "id":26330,
            "uri":"http://www.songkick.com/metro_areas/26330-us-sf-bay-area?utm_source=PARTNER_ID&utm_medium=partner",
            "displayName":"SF Bay Area",
            "country": { "displayName":"US" },
            "state": { "displayName":"CA" }
          }
        },
        "status":"ok",
        "popularity":0.012763
      }, ....
    ]
  },
  "totalEntries":24,
  "perPage":50,
  "page":1,
  "status":"ok"
}
```
