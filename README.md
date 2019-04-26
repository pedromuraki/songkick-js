# Songkick JS

[![Build Status](https://travis-ci.org/pedromuraki/songkick-js.svg?branch=master)](https://travis-ci.org/pedromuraki/songkick-js)
[![Coverage Status](https://coveralls.io/repos/github/pedromuraki/songkick-js/badge.svg?branch=master)](https://coveralls.io/github/pedromuraki/songkick-js?branch=master)

A javascript wrapper library to work with the [Songkick](https://www.songkick.com/) API.

## Getting Started

### Install

Install with npm or include the script located on the `dist` folder (SongkickJS.min.js)

```
$ npm i --save-dev songkick-js
```

### Initializing

Create a new instance of the SongkickJS class passing as parameters a _string_ with your **API key**, and a _boolean_ indicating if the API should be requested via **https**. You can request an API key [here](https://www.songkick.com/api_key_requests/new).

```js
// if installed via npm
// import the library as es6 module
import SongkickJS from 'songkick-js';
// or common js
const SongkickJS = require('songkick-js');

// create an instance of SongkickJS
const songkick = new SongkickJS('your-api-key', true);
```

---

## How it works

All methods makes an AJAX request to the Songkick API and returns a promise with a JSON object containing the response data.

Example calling the `getUpcomingEvents` method:

```js
songkick
  .getUpcomingEvents({
    from: 'artists',
    id: '379603' // id for Rolling Stones
  })
  .then(data => {
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

---

## Methods

### getUpcomingEvents

This method returns the upcoming events from an artist, a venue, a metro area or an user.

```js
songkick
  .getUpcomingEvents({
    from: 'metro_areas',
    id: '7644', // id for New York, NY, US
    optionalParams: {
      min_date: '2018/06/01',
      max_date: '2018/12/31',
      page: 1,
      per_page: 20,
      order: 'asc'
    }
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter      |                Required                 |                                                                              Value |
| -------------- | :-------------------------------------: | ---------------------------------------------------------------------------------: |
| from           |                   Yes                   |                                      "artists", "venues", "metro_areas" or "users" |
| id             |                   Yes                   |     The id related to the "from" parameter. (\* for users, set the username as id) |
| reason         |   Required if "from" value is "users"   |                                                   "tracked_artist" or "attendance" |
| optionalParams |                Optional                 | An object containing the optional parameters and its respective values (see below) |
| min_date       | Optional (inside optionalParams object) |                                                    A date in the format YYYY-MM-DD |
| max_date       | Optional (inside optionalParams object) |                                                    A date in the format YYYY-MM-DD |
| page           | Optional (inside optionalParams object) |    Results are paginated. This specifies the results page number. (First page = 1) |
| per_page       | Optional (inside optionalParams object) |                             The number of results to return in each page. (Max 50) |
| order          | Optional (inside optionalParams object) |                    Results are ordered by date: 'asc' or 'desc'. (Default = 'asc') |

---

### getPastEvents

This method returns the past events from an artist or an user.

```js
songkick
  .getPastEvents({
    from: 'artists',
    id: '379603', // id for Rolling Stones
    optionalParams: {
      min_date: '2018/06/01',
      max_date: '2018/12/31',
      page: 1,
      per_page: 20,
      order: 'asc'
    }
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter      |                Required                 |                                                                              Value |
| -------------- | :-------------------------------------: | ---------------------------------------------------------------------------------: |
| from           |                   Yes                   |                                                               "artists" or "users" |
| id             |                   Yes                   |     The id related to the "from" parameter. (\* for users, set the username as id) |
| optionalParams |                Optional                 | An object containing the optional parameters and its respective values (see below) |
| min_date       | Optional (inside optionalParams object) |                                                    A date in the format YYYY-MM-DD |
| max_date       | Optional (inside optionalParams object) |                                                    A date in the format YYYY-MM-DD |
| page           | Optional (inside optionalParams object) |    Results are paginated. This specifies the results page number. (First page = 1) |
| per_page       | Optional (inside optionalParams object) |                             The number of results to return in each page. (Max 50) |
| order          | Optional (inside optionalParams object) |                    Results are ordered by date: 'asc' or 'desc'. (Default = 'asc') |

---

### getDetails

This method returns details from an artist, an event or a venue.

```js
songkick
  .getDetails({
    from: 'artists',
    id: '379603' // id for Rolling Stones
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter | Required |                                   Value |
| --------- | :------: | --------------------------------------: |
| from      |   Yes    |         "artists", "events" or "venues" |
| id        |   Yes    | The id related to the "from" parameter. |

---

### getUserTrackings

This method returns the artists or metro_areas that an user is tracking.

```js
songkick
  .getUserTrackings({
    username: 'username',
    trackingObject: 'metro_areas',
    optionalParams: {
      page: 1,
      per_page: 20,
      fields: 'id,displayName',
      created_after: '2018-02-28T13:37:00Z'
    }
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter      |                Required                 |                                                                                                                                                                                                                                             Value |
| -------------- | :-------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| username       |                   Yes                   |                                                                                                                                                                                                                               The user's username |
| trackingObject |                   Yes                   |                                                                                                                                                                                                                        "artists" or "metro_areas" |
| optionalParams |                Optional                 |                                                                                                                                                                An object containing the optional parameters and its respective values (see below) |
| page           | Optional (inside optionalParams object) |                                                                                                                                                                   Results are paginated. This specifies the results page number. (First page = 1) |
| per_page       | Optional (inside optionalParams object) |                                                                                                                                                                                            The number of results to return in each page. (Max 50) |
| fields         | Optional (inside optionalParams object) |                                                                                                            The caller may specify a subset of fields to return in the response, in the form fields=key[,key]\*. For example fields=id,displayName |
| created_after  | Optional (inside optionalParams object) | Specifies that only items created on or after a given time/date should be included in the response. Use ISO8601 format, e.g. 2018-02-28T13:37:00Z. Technical limitations mean that created_after can’t be supported for muted artists at present. |

---

### getUserMutedArtists

This method returns the artists which the user once tracked but has subsequently untracked.

```js
songkick
  .getUserMutedArtists({
    username: 'username',
    optionalParams: {
      page: 1,
      per_page: 20,
      fields: 'id,displayName',
      created_after: '2018-02-28T13:37:00Z'
    }
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter      |                Required                 |                                                                                                                                                                                                                                             Value |
| -------------- | :-------------------------------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| username       |                   Yes                   |                                                                                                                                                                                                                               The user's username |
| optionalParams |                Optional                 |                                                                                                                                                                An object containing the optional parameters and its respective values (see below) |
| page           | Optional (inside optionalParams object) |                                                                                                                                                                   Results are paginated. This specifies the results page number. (First page = 1) |
| per_page       | Optional (inside optionalParams object) |                                                                                                                                                                                            The number of results to return in each page. (Max 50) |
| fields         | Optional (inside optionalParams object) |                                                                                                            The caller may specify a subset of fields to return in the response, in the form fields=key[,key]\*. For example fields=id,displayName |
| created_after  | Optional (inside optionalParams object) | Specifies that only items created on or after a given time/date should be included in the response. Use ISO8601 format, e.g. 2018-02-28T13:37:00Z. Technical limitations mean that created_after can’t be supported for muted artists at present. |

---

### isUserTracking

This method check if the user is tracking a metro area, an artist or an event.
If the user is tracking the metro area or artist, returns a tracking. Otherwise a 404 response is returned.
If the user is attending or did attend the event, returns a tracking with its attendance (im_going|i_might_go). Otherwise a 404 response is returned.

```js
songkick
  .isUserTracking({
    username: 'username',
    trackingObject: 'artist',
    id: '379603' // id for Rolling Stones
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter      | Required |                                             Value |
| -------------- | :------: | ------------------------------------------------: |
| username       |   Yes    |                               The user's username |
| trackingObject |   Yes    |                 "artist", "metro_area" or "event" |
| id             |   Yes    | The id related to the "trackingObject" parameter. |

---

### getSimilarArtists

This methods returns a list of artists similar to a given artist, based on Songkick's tracking and attendance data.

```js
songkick
  .getSimilarArtists({
    id: '379603', // id for Rolling Stones
    optionalParams: {
      page: 1,
      per_page: 20
    }
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter |                Required                 |                                                                           Value |
| --------- | :-------------------------------------: | ------------------------------------------------------------------------------: |
| id        |                   Yes                   |                                                                The artist's id. |
| page      | Optional (inside optionalParams object) | Results are paginated. This specifies the results page number. (First page = 1) |
| per_page  | Optional (inside optionalParams object) |                          The number of results to return in each page. (Max 50) |

---

### searchEvents

This methods returns a list of events based on the search parameters.

```js
songkick
  .searchEvents({
    searchBy: {
      artist_name: 'rolling+stones'
    },
    optionalParams: {
      type: 'Concert',
      page: 1,
      per_page: 20,
      min_date: '2018/06/01',
      max_date: '2018/12/31'
    }
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter        |                             Required                              |                                                                              Value |
| ---------------- | :---------------------------------------------------------------: | ---------------------------------------------------------------------------------: |
| searchBy         |                                Yes                                |                                        An object containing the search parameters. |
| artist_name \*\* |  Required if "location" not provided (inside "searchBy" object)   |                                      The artist's name (use "+" instead of spaces) |
| location \*\*    | Required if "artist_name" not provided (inside "searchBy" object) |        "sk:id", "geo:lat,lng", "ip:ip" or "clientip" (see table below for details) |
| optionalParams   |                             Optional                              | An object containing the optional parameters and its respective values (see below) |
| min_date         |              Optional (inside optionalParams object)              |                                                    A date in the format YYYY-MM-DD |
| max_date         |              Optional (inside optionalParams object)              |                                                    A date in the format YYYY-MM-DD |
| page             |              Optional (inside optionalParams object)              |    Results are paginated. This specifies the results page number. (First page = 1) |
| per_page         |              Optional (inside optionalParams object)              |                             The number of results to return in each page. (Max 50) |
| type             |              Optional (inside optionalParams object)              |                                                            "Concert" or "Festival" |

_\*\* only one parameter is allowed on the "searchBy" object ("artist_name" or "location")._

The options below can be used in the "location" parameter to specify how the content returned should be localised:

| Location Type |                                          Description                                           |
| ------------- | :--------------------------------------------------------------------------------------------: |
| sk:id         |                          Localise based on a Songkick metro area ID.                           |
| geo:lat,lng   |     Localise based on latitude / longitude. Use decimal degrees positive = north and east.     |
| ip:ip         | Localise based on an IP address. Return all results if address is not present in the database. |
| clientip      |     Localise based on IP address of client. Useful for purely client side implementations.     |

---

### searchArtists

This methods returns a list of artists based on the search query. This method searches by the artist's name.

```js
songkick
  .searchArtists({
    query: 'rolling+stones',
    optionalParams: {
      page: 1,
      per_page: 20
    }
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter      |                Required                 |                                                                              Value |
| -------------- | :-------------------------------------: | ---------------------------------------------------------------------------------: |
| query          |                   Yes                   |                                      The artist's name (use "+" instead of spaces) |
| optionalParams |                Optional                 | An object containing the optional parameters and its respective values (see below) |
| page           | Optional (inside optionalParams object) |    Results are paginated. This specifies the results page number. (First page = 1) |
| per_page       | Optional (inside optionalParams object) |                             The number of results to return in each page. (Max 50) |

---

### searchVenues

This methods returns a list of venues based on the search query. This method searches by the venue's name.

```js
songkick
  .searchVenues({
    query: 'madison+square+garden',
    optionalParams: {
      page: 1,
      per_page: 20
    }
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter      |                Required                 |                                                                              Value |
| -------------- | :-------------------------------------: | ---------------------------------------------------------------------------------: |
| query          |                   Yes                   |                                      The venues's name (use "+" instead of spaces) |
| optionalParams |                Optional                 | An object containing the optional parameters and its respective values (see below) |
| page           | Optional (inside optionalParams object) |    Results are paginated. This specifies the results page number. (First page = 1) |
| per_page       | Optional (inside optionalParams object) |                             The number of results to return in each page. (Max 50) |

---

### searchLocations

This methods returns a list of cities and its metro areas based on the search parameters.

```js
songkick
  .searchLocations({
    searchBy: {
      location: 'clientip'
    },
    optionalParams: {
      page: 1,
      per_page: 20
    }
  })
  .then(data => {
    // do something with the response data
  });
```

#### Parameters

| Parameter      |                            Required                            |                                                                              Value |
| -------------- | :------------------------------------------------------------: | ---------------------------------------------------------------------------------: |
| searchBy       |                              Yes                               |                                        An object containing the search parameters. |
| query \*\*     | Required if "location" not provided (inside "searchBy" object) |                            The city or location's name (use "+" instead of spaces) |
| location \*\*  |  Required if "query" not provided (inside "searchBy" object)   |                 "geo:lat,lng", "ip:ip" or "clientip" (see table below for details) |
| optionalParams |                            Optional                            | An object containing the optional parameters and its respective values (see below) |
| page           |            Optional (inside optionalParams object)             |    Results are paginated. This specifies the results page number. (First page = 1) |
| per_page       |            Optional (inside optionalParams object)             |                             The number of results to return in each page. (Max 50) |

_\*\* only one parameter is allowed on the "searchBy" object ("query" or "location")._

The options below can be used in the "location" parameter to specify how the content returned should be localised:

| Location Type |                                          Description                                           |
| ------------- | :--------------------------------------------------------------------------------------------: |
| geo:lat,lng   |     Localise based on latitude / longitude. Use decimal degrees positive = north and east.     |
| ip:ip         | Localise based on an IP address. Return all results if address is not present in the database. |
| clientip      |     Localise based on IP address of client. Useful for purely client side implementations.     |
