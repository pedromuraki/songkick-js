const API_URL = 'http://api.songkick.com/api/3.0';
const errors = {
  required: 'Error: Required parameter(s) missing. See library documentation.',
  invalid: 'Error: Invalid parameter(s). See library documentation.',
}

const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

class SongkickWrapper {
  constructor(key) {
    this._APIKEY = key;
    /*
    this._APIKEY *
    this._requestUrl (defined after a request)
    */
  }

  // UPCOMING EVENTS
  getUpcomingEvents(options) {
    /*
    options: {
      from *
        artists, venues, metro_areas, users
      id *
        obs: for users, set username as id
      reason (required if from === user)
        tracked_artist, attendance
      optionalParams: {
        min_date
        max_date
        page
        per_page
        order
      }
    }
    */
    this._checkRequiredParams([options.from, options.id]);
    this._checkParamValue(options.from, ['artists', 'venues', 'metro_areas', 'users']);
    if (options.from === 'users') {
      this._checkRequiredParams([options.reason]);
      this._checkParamValue(options.reason, ['tracked_artist', 'attendance']);
    }

    const reason = options.reason ? `reason=${options.reason}&` : '';
    return this._makeRequest(`${API_URL}/${options.from}/${options.id}/calendar.json?${reason}apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`);
  }
  // PAST EVENTS
  getPastEvents(options) {
    /*
    options: {
      from *
        artists, users
      id *
        obs: for users, set username as id
      optionalParams: {
        min_date
        max_date
        page
        per_page
        order
      }
    }
    */
    this._checkRequiredParams([options.from, options.id]);
    this._checkParamValue(options.from, ['artists', 'users']);

    return this._makeRequest(`${API_URL}/${options.from}/${options.id}/gigography.json?apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`);
  }

  // DETAILS (FROM ARTISTS, EVENTS OR VENUES)
  getDetails(options) {
    /*
    options: {
      from *
        artists, events, venues
      id *
    }
    */
    this._checkRequiredParams([options.from, options.id]);
    this._checkParamValue(options.from, ['artists', 'venues', 'events']);

    return this._makeRequest(`${API_URL}/${options.from}/${options.id}.json?apikey=${this._APIKEY}`);
  }

  // USER TRACKINGS (OF METROS AREAS OR ARTISTS)
  getUserTrackings(options) {
    /*
    options: {
      username *
      trackingObject *
        metro_areas, artists
      optionalParams: {
        page
        per_page
        fields
        created_after
      }
    }
    */
    this._checkRequiredParams([options.username, options.trackingObject]);
    this._checkParamValue(options.trackingObject, ['metro_areas', 'artists']);

    return this._makeRequest(`${API_URL}/users/${options.username}/${options.trackingObject}/tracked.json?apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`);
  }
  // USER MUTED ARTISTS
  getUserMutedArtists(options) {
    /*
    options: {
      username *
      optionalParams: {
        page
        per_page
        fields
        created_after
      }
    }
    */
    this._checkRequiredParams([options.username]);

    return this._makeRequest(`${API_URL}/users/${options.username}/artists/muted.json?apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`);
  }
  // IS USER TRACKING
  isUserTracking(options) {
    /*
    options: {
      username *
      trackingObject *
        metro_area, artist, event
      id *
    }
    */
    this._checkRequiredParams([options.username, options.trackingObject, options.id]);
    this._checkParamValue(options.trackingObject, ['metro_area', 'artist', 'event']);

    return this._makeRequest(`${API_URL}/users/${options.username}/trackings/${options.trackingObject}:${options.id}.json?apikey=${this._APIKEY}`);
  }

  // SIMILAR ARTISTS
  getSimilarArtists(options) {
    /*
    options: {
      id *
      optionalParams: {
        page
        per_page
      }
    }
    */
    this._checkRequiredParams([options.id]);

    return this._makeRequest(`${API_URL}/artists/${options.id}/similar_artists.json?apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`);
  }

  // SEARCH EVENTS
  searchEvents(options) {
    /*
    options: {
      searchBy: {
        artist_name (required if location not provided)
          artist+name
        location (required if artist_name not provided)
          sk:<id>, geo:<lat>,<lng>, ip:<ip>, clientip
      }
      optionalParams: {
        min_date
          YYYY-MM-DD
        max_date
          YYYY-MM-DD
        type
          'Concert', 'Festival'
        page
        per_page
      }
    }
    */
    if (!options.searchBy || (!options.searchBy.artist_name && !options.searchBy.location)) console.log(errors.required);
    if (Object.keys(options.searchBy).length > 3) console.log(errors.invalid);

    return this._makeRequest(`${API_URL}/events.json?apikey=${this._APIKEY}${this._paramsMarkup(options.searchBy)}${this._paramsMarkup(options.optionalParams)}`);
  }
  // SEARCH ARTISTS
  searchArtists(options) {
    /*
    options: {
      query*
        artist+name
      optionalParams: {
        page
        per_page
      }
    }
    */
    this._checkRequiredParams([options.query]);

    return this._makeRequest(`${API_URL}/search/artists.json?apikey=${this._APIKEY}&query=${options.query}${this._paramsMarkup(options.optionalParams)}`);
  }
  // SEARCH VENUES
  searchVenues(options) {
    /*
    options: {
      query*
        venue+name
      optionalParams: {
        page
        per_page
      }
    }
    */
    this._checkRequiredParams([options.query]);

    return this._makeRequest(`${API_URL}/search/venues.json?apikey=${this._APIKEY}&query=${options.query}${this._paramsMarkup(options.optionalParams)}`);
  }
  // SEARCH LOCATIONS
  searchLocations(options) {
    /*
    options: {
      searchBy: {
        query (required if location not provided)
          location+name
        location (required if query not provided)
          geo:<lat>,<lng>, ip:<ip>, clientip
      }
      optionalParams: {
        page
        per_page
      }
    }
    */
    if (!options.searchBy || (!options.searchBy.query && !options.searchBy.location)) console.log(errors.required);
    if (Object.keys(options.searchBy).length > 1) console.log(errors.invalid);

    const searchBy = options.searchBy.query ? `query=${options.searchBy.query}` : `location=${options.searchBy.location}`;
    return this._makeRequest(`${API_URL}/search/locations.json?${searchBy}&apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`);
  }


  // HELPERS
  _paramsMarkup(params) {
    let paramsMarkup = '';
    if (params)
      Object.entries(params).forEach(([key, value]) => paramsMarkup += `&${key}=${value}`);
    return paramsMarkup;
  }

  _makeRequest(url) {
    return new Promise((resolve, reject) => {
      this._requestUrl = url;

      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = () =>
        req.status === 200 ? resolve(JSON.parse(req.responseText).resultsPage) : '';

      req.send();
    });
  }

  _checkRequiredParams(params) {
    params.forEach((param) => {
      if (!param) console.log(errors.required);
    });
  }

  _checkParamValue(paramValue, acceptedValues) {
    const isValid = acceptedValues.some((acceptedValue) => {
      return paramValue === acceptedValue;
    });
    if (!isValid) console.log(`Error: "${paramValue}" is not a valid value. See library documentation.`);
  }


  // GETTERS
  get requestUrl() {
    return this._requestUrl;
  }
}

export default SongkickWrapper;
