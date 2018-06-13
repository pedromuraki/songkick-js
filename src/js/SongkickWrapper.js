class SongkickWrapper {
  constructor(key) {
    this._APIKEY = key;
    /*
    this._APIKEY *
    this._data (defined after a request)
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
      onloadstart
      onsuccess
      on404
    }
    */
    const reason = options.reason ? `reason=${options.reason}&` : '';
    this._makeRequest(`http://api.songkick.com/api/3.0/${options.from}/${options.id}/calendar.json?${reason}apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`, options);
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
      onloadstart
      onsuccess
      on404
    }
    */
    this._makeRequest(`http://api.songkick.com/api/3.0/${options.from}/${options.id}/gigography.json?apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`, options);
  }

  // DETAILS (FROM ARTISTS, EVENTS OR VENUES)
  getDetails(options) {
    /*
    options: {
      from *
        artists, events, venues
      id *
      onloadstart
      onsuccess
      on404
    }
    */
    this._makeRequest(`https://api.songkick.com/api/3.0/${options.from}/${options.id}.json?apikey=${this._APIKEY}`, options);
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
      onloadstart
      onsuccess
      on404
    }
    */
    this._makeRequest(`https://api.songkick.com/api/3.0/users/${options.username}/${options.trackingObject}/tracked.json?apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`, options);
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
      onloadstart
      onsuccess
      on404
    }
    */
    this._makeRequest(`https://api.songkick.com/api/3.0/users/${options.username}/artists/muted.json?apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`, options);
  }
  // IS USER TRACKING
  isUserTracking(options) {
    /*
    options: {
      username *
      trackingObject *
        metro_area, artist, event
      id *
      onloadstart
      onsuccess
      on404
    }
    */
    this._makeRequest(`https://api.songkick.com/api/3.0/users/${options.username}/trackings/${options.trackingObject}:${options.id}.json?apikey=${this._APIKEY}`, options);
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
      onloadstart
      onsuccess
      on404
    }
    */
    this._makeRequest(`https://api.songkick.com/api/3.0/artists/${options.id}/similar_artists.json?apikey=${this._APIKEY}${this._paramsMarkup(options.optionalParams)}`, options);
  }

  // SEARCH
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
      onloadstart
      onsuccess
      on404
    }
    */
    this._makeRequest(`https://api.songkick.com/api/3.0/events.json?apikey=${this._APIKEY}${this._paramsMarkup(options.searchBy)}${this._paramsMarkup(options.optionalParams)}`, options);
  }

  // HELPERS
  _paramsMarkup(params) {
    let paramsMarkup = '';
    if (params)
      Object.entries(params).forEach(([key, value]) => paramsMarkup += `&${key}=${value}`);
    return paramsMarkup;
  }

  _makeRequest(url, options) {
    /*
    url *
    options: {
      onloadstart
      onsuccess
      on404
    }
    */
    /* make the request */
    const request = new XMLHttpRequest();
    request.open('GET', url);

    /* callbacks */
    if (options.onloadstart) request.onloadstart = () => options.onloadstart();

    request.onload = () => {
      const status = request.status;
      this._data = JSON.parse(request.responseText);
      this._requestUrl = url;

      if (status === 200 && options.onsuccess) options.onsuccess();
      if (status === 404) {
        console.log(`Error: ${this._data.resultsPage.error.message}`);
        if (options.on404) options.on404();
      }
    };

    /* send the request */
    request.send();
  }


  // GETTERS
  get data() {
    return this._data;
  }

  get requestUrl() {
    return this._requestUrl;
  }
}

export default SongkickWrapper;
