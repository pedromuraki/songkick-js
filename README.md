# Songkick Wrapper

[![Build Status](https://travis-ci.org/pedromuraki/songkick-wrapper.svg?branch=master)](https://travis-ci.org/pedromuraki/songkick-wrapper)
[![Coverage Status](https://coveralls.io/repos/github/pedromuraki/songkick-wrapper/badge.svg?branch=master)](https://coveralls.io/github/pedromuraki/songkick-wrapper?branch=master)

> A javascript wrapper library to work with the [Songkick](https://www.songkick.com/) API.

## Getting Started

### Install

Install with npm / Include the script located on the `dist` folder

````
$ npm install --save-dev songkick-wrapper
````

### Initializing

Create a new instance of the SongkickWrapper class passing your API key as parameter. You can request an API key [here](https://www.songkick.com/api_key_requests/new).

```js
// if installed via npm
// import the library as es6 module
import SongkickWrapper from 'SongkickWrapper';
// or common js
const SongkickWrapper = require('SongkickWrapper');

// create an instance of SongkickWrapper with your API key
const songkick = new SongkickWrapper('your-api-key');
```

## How it works

All methods makes an AJAX request to the Songkick API and returns a promise with a JSON object containing the data received.

Example calling the `getUpcomingEvents` method:

```js
songkick.getUpcomingEvents({
  from: 'artists',
  id: '379603', // id for Rolling Stones
}).then(data => {
  console.log(data);
});
```
Logs the response data:

```js
{
  "status": "ok",
  "results": {
    "event": [
      {
        "type": "Concert",
        "popularity": 0.473291,
        "displayName": "The Rolling Stones at Mercedes-Benz Arena (June 30, 2018)",
        "status": "ok",
        "performance": [
          {
            "displayName": "The Rolling Stones",
            "billingIndex": 1,
            "billing": "headline",
            "artist": {
              "displayName": "The Rolling Stones",
              "identifier": [
                {
                  "href": "http://api.songkick.com/api/3.0/artists/mbid:b071f9fa-14b0-4217-8e97-eb41da73f598.json",
                  "mbid": "b071f9fa-14b0-4217-8e97-eb41da73f598"
                },
                {
                  "href": "http://api.songkick.com/api/3.0/artists/mbid:a52940ca-3ec9-4a2b-89e4-ad358f64c8f7.json",
                  "mbid": "a52940ca-3ec9-4a2b-89e4-ad358f64c8f7"
                }
              ],
              "uri": "http://www.songkick.com/artists/379603-rolling-stones?utm_source=48647&utm_medium=partner",
              "id": 379603
            },
            "id": 63462749
          }
        ],
        "ageRestriction": null,
        "start": {
          "datetime": null,
          "time": null,
          "date": "2018-06-30"
        },
        "location": {
          "city": "Stuttgart, Germany",
          "lat": 48.7908464,
          "lng": 9.2313422
        },
        "uri": "http://www.songkick.com/concerts/32988509-rolling-stones-at-mercedesbenz-arena?utm_source=48647&utm_medium=partner",
        "id": 32988509,
        "venue": {
          "displayName": "Mercedes-Benz Arena",
          "lat": 48.7908464,
          "lng": 9.2313422,
          "metroArea": {
            "displayName": "Stuttgart",
            "country": {
              "displayName": "Germany"
            },
            "uri": "http://www.songkick.com/metro_areas/28591-germany-stuttgart?utm_source=48647&utm_medium=partner",
            "id": 28591
          },
          "uri": "http://www.songkick.com/venues/508341-mercedesbenz-arena?utm_source=48647&utm_medium=partner",
          "id": 508341
        }
      },
      (...)
    ]
  },
  "perPage": 50,
  "page": 1,
  "totalEntries": 3
}
```

## Methods

### getUpcomingEvents
This method returns the upcoming events from an artist, a venue, a metro_area or an user.

```js
songkick.getUpcomingEvents({
  from: 'metro_areas',
  id: '7644', // id for New York, NY, US
  optionalParams: {
    min_date: '2018/06/01',
    max_date: '2018/12/31',
    page: 1,
    per_page: 20,
    order: 'asc',
  }
}).then(data => {
  // do something with the response data
});
```
#### Parameters
| Parameter      | Required                                | Value                                                                                                  |
|----------------|:---------------------------------------:|-------------------------------------------------------------------------------------------------------:|
| from           | Yes                                     | "artists", "venues", "metro_areas" or "users"                                                          |
| id             | Yes                                     | The id related to the "from" parameter. (* for users, set the username as id)                          |
| reason         | Required if "from" value is "users"     | "tracked_artist" or "attendance"                                                                       |
| optionalParams | Optional                                | An object containing the optional parameters and its respective values (see bellow)                    |
| min_date       | Optional (inside optionalParams object) | A date in the format YYYY-MM-DD                                                                        |
| max_date       | Optional (inside optionalParams object) | A date in the format YYYY-MM-DD                                                                        |
| page           | Optional (inside optionalParams object) | Results are paginated. This specifies the results page number. (First page = 1)                        |
| per_page       | Optional (inside optionalParams object) | The number of results to return in each page. (Max 50)                                                 |
| order          | Optional (inside optionalParams object) | Results are ordered by date: 'asc' or 'desc'. (Default = 'asc')                                        |

---

### getPastEvents
This method returns the past events from an artist or an user.

```js
songkick.getPastEvents({
  from: 'artists',
  id: '379603', // id for Rolling Stones
  optionalParams: {
    min_date: '2018/06/01',
    max_date: '2018/12/31',
    page: 1,
    per_page: 20,
    order: 'asc',
  }
}).then(data => {
  // do something with the response data
});
```

#### Parameters
| Parameter      | Required                                | Value                                                                                                  |
|----------------|:---------------------------------------:|-------------------------------------------------------------------------------------------------------:|
| from           | Yes                                     | "artists" or "users"                                                          |
| id             | Yes                                     | The id related to the "from" parameter. (* for users, set the username as id)                          |
| optionalParams | Optional                                | An object containing the optional parameters and its respective values (see bellow)                    |
| min_date       | Optional (inside optionalParams object) | A date in the format YYYY-MM-DD                                                                        |
| max_date       | Optional (inside optionalParams object) | A date in the format YYYY-MM-DD                                                                        |
| page           | Optional (inside optionalParams object) | Results are paginated. This specifies the results page number. (First page = 1)                        |
| per_page       | Optional (inside optionalParams object) | The number of results to return in each page. (Max 50)                                                 |
| order          | Optional (inside optionalParams object) | Results are ordered by date: 'asc' or 'desc'. (Default = 'asc')                                        |
