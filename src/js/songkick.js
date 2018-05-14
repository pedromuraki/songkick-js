class Songkick {
  constructor(options) {
    this.options = options;
    // apiKey *
    // this.data;
  }
  getUpcomingEvents(options) {
    // from *
    // id *
    // optionalParams
      // min_date
      // max_date
      // page
      // per_page
      // order
    // onloadstart
    // onload

    /* set url */
    let optionalparamsMarkup = '';
    Object.entries(options.optionalParams).forEach(([key, value]) => {
      optionalparamsMarkup += `&${key}=${value}`;
    });
    const requestUrl = `http://api.songkick.com/api/3.0/${options.from}/${options.id}/calendar.json?apikey=${this.options.apiKey}${optionalparamsMarkup}`;
    console.log(requestUrl);

    this.makeRequestAndSetEvents(options, requestUrl);
  }
  makeRequestAndSetEvents(options, requestUrl) {
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
