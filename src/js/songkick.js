class Songkick {
  constructor(options) {
    this.options = options;
    // apiKey *
    // this.data;
  }
  getUpcomingEvents(options) {
    // from *
      // artists, venues, metro_areas, users
    // id *
      // obs: for users, set username as id
    // optionalParams
      // min_date
      // max_date
      // page
      // per_page
      // order
    // onloadstart
    // onload

    this.handleRequest(options, this.setUrl('up-events', options, 'calendar'));
  }
  getPastEvents(options) {
    this.handleRequest(options, this.setUrl('past-events', options, 'gigography'));
  }
  getDetails(options) {
    // from *
    // id *
    this.handleRequest(options, this.setUrl('details', options));
  }

  setUrl(urlType, options) {
    /*
      urlType *
        'events' or 'details'
      options *
        from
        id
    */

    /* set optional params */
    let optionalparamsMarkup = '';
    if (options.optionalParams) {
      Object.entries(options.optionalParams).forEach(([key, value]) => {
        optionalparamsMarkup += `&${key}=${value}`;
      });
    }
    /* return the request url */
    if (urlType === 'up-events') return `http://api.songkick.com/api/3.0/${options.from}/${options.id}/calendar.json?apikey=${this.options.apiKey}${optionalparamsMarkup}`;
    if (urlType === 'past-events') return `http://api.songkick.com/api/3.0/${options.from}/${options.id}/gigography.json?apikey=${this.options.apiKey}${optionalparamsMarkup}`;
    if (urlType === 'details') return `http://api.songkick.com/api/3.0/${options.from}/${options.id}.json?apikey=${this.options.apiKey}`;
  }
  handleRequest(options, requestUrl) {
    /* make the request */
    const request = new XMLHttpRequest();
    request.open('GET', requestUrl);

    /* event handlers */
    if (options.onloadstart) request.onloadstart = () => options.onloadstart();

    request.onload = () => {
      const status = request.status;
      if (status >= 200 && status < 400) {
        this.data = JSON.parse(request.responseText);
        if (options.onload) options.onload();
      }
    };

    /* send the request */
    request.send();
  }
}

export default Songkick;
