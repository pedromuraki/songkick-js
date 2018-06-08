class SongkickWrapper {
  constructor(key) {
    this._APIKEY = key;
    /*
    this._APIKEY *
    this._data (defined after a request)
    */
  }

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
      onload
    }
    */
    this._makeRequest(this._setUrl(options, '/calendar'), options);
  }
  getPastEvents(options) {
    /*
    options: {
      from *
        artists, users
      ... same as getUpcomingEvents
    }
    */
    this._makeRequest(this._setUrl(options, '/gigography'), options);
  }
  getDetails(options) {
    /*
    options: {
      from *
        artists, events, venues,
      id *
    }
    */
    this._makeRequest(this._setUrl(options), options);
  }

  _setUrl(options, urlType = '') {
    /*
    options: {
      from *
        artists, venues, metro_areas, users
      id *
        obs: for users, set username as id
    }
    urlType
      /calendar, /gigography
    */
    const reason = options.reason ? `reason=${options.reason}&` : '';
    /* set optional params */
    let optionalparamsMarkup = '';
    if (options.optionalParams)
      Object.entries(options.optionalParams).forEach(([key, value]) => optionalparamsMarkup += `&${key}=${value}`);

    /* return the request url */
    console.log(`http://api.songkick.com/api/3.0/${options.from}/${options.id}${urlType}.json?${reason}apikey=${this._APIKEY}${optionalparamsMarkup}`);
    return `http://api.songkick.com/api/3.0/${options.from}/${options.id}${urlType}.json?${reason}apikey=${this._APIKEY}${optionalparamsMarkup}`;
    // let requestUrl;
    // if (urlType === 'up-events') requestUrl = `http://api.songkick.com/api/3.0/${options.from}/${options.id}/calendar.json?apikey=${this.options.apiKey}${optionalparamsMarkup}`;
    // if (urlType === 'past-events') requestUrl =  `http://api.songkick.com/api/3.0/${options.from}/${options.id}/gigography.json?apikey=${this.options.apiKey}${optionalparamsMarkup}`;
    // if (urlType === 'details') requestUrl = `http://api.songkick.com/api/3.0/${options.from}/${options.id}.json?apikey=${this.options.apiKey}`;
    // console.log(requestUrl);
    // return requestUrl;
  }

  _makeRequest(url, options) {
    /*
    url *
    options: {
      onloadstart
      onload
    }
    */
    /* make the request */
    const request = new XMLHttpRequest();
    request.open('GET', url);

    /* event handlers */
    if (options.onloadstart) request.onloadstart = () => options.onloadstart();

    request.onload = () => {
      const status = request.status;
      if (status >= 200 && status < 400) {
        this._data = JSON.parse(request.responseText);
        if (options.onload) options.onload();
      }
    };

    /* send the request */
    request.send();
  }

  get data() {
    return this._data;
  }
}

export default SongkickWrapper;
