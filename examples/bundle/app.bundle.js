!function(e){var r={};function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=3)}([function(e,r){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,r,t){"use strict";(function(e){var t,a,n,s,i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};window,s=function(){return function(e){var r={};function t(a){if(r[a])return r[a].exports;var n=r[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,t),n.l=!0,n.exports}return t.m=e,t.c=r,t.d=function(e,r,a){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:a})},t.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=2)}([function(e,r,t){Object.defineProperty(r,"__esModule",{value:!0});var a=function(e,r){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,r){var t=[],a=!0,n=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(a=(i=o.next()).done)&&(t.push(i.value),!r||t.length!==r);a=!0);}catch(e){n=!0,s=e}finally{try{!a&&o.return&&o.return()}finally{if(n)throw s}}return t}(e,r);throw new TypeError("Invalid attempt to destructure non-iterable instance")},n=function(){function e(e,r){for(var t=0;t<r.length;t++){var a=r[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(r,t,a){return t&&e(r.prototype,t),a&&e(r,a),r}}(),s="http://api.songkick.com/api/3.0",i="Error: Required parameter(s) missing. See library documentation.",o="Error: Invalid parameter(s). See library documentation.",u=function(){function e(r){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,e),this._APIKEY=r}return n(e,[{key:"getUpcomingEvents",value:function(e){this._checkRequiredParams([e.from,e.id]),this._checkParamValue(e.from,["artists","venues","metro_areas","users"]),"users"===e.from&&(this._checkRequiredParams([e.reason]),this._checkParamValue(e.reason,["tracked_artist","attendance"]));var r=e.reason?"reason="+e.reason+"&":"";return this._makeRequest(s+"/"+e.from+"/"+e.id+"/calendar.json?"+r+"apikey="+this._APIKEY+this._paramsMarkup(e.optionalParams))}},{key:"getPastEvents",value:function(e){return this._checkRequiredParams([e.from,e.id]),this._checkParamValue(e.from,["artists","users"]),this._makeRequest(s+"/"+e.from+"/"+e.id+"/gigography.json?apikey="+this._APIKEY+this._paramsMarkup(e.optionalParams))}},{key:"getDetails",value:function(e){return this._checkRequiredParams([e.from,e.id]),this._checkParamValue(e.from,["artists","venues","events"]),this._makeRequest(s+"/"+e.from+"/"+e.id+".json?apikey="+this._APIKEY)}},{key:"getUserTrackings",value:function(e){return this._checkRequiredParams([e.username,e.trackingObject]),this._checkParamValue(e.trackingObject,["metro_areas","artists"]),this._makeRequest(s+"/users/"+e.username+"/"+e.trackingObject+"/tracked.json?apikey="+this._APIKEY+this._paramsMarkup(e.optionalParams))}},{key:"getUserMutedArtists",value:function(e){return this._checkRequiredParams([e.username]),this._makeRequest(s+"/users/"+e.username+"/artists/muted.json?apikey="+this._APIKEY+this._paramsMarkup(e.optionalParams))}},{key:"isUserTracking",value:function(e){return this._checkRequiredParams([e.username,e.trackingObject,e.id]),this._checkParamValue(e.trackingObject,["metro_area","artist","event"]),this._makeRequest(s+"/users/"+e.username+"/trackings/"+e.trackingObject+":"+e.id+".json?apikey="+this._APIKEY)}},{key:"getSimilarArtists",value:function(e){return this._checkRequiredParams([e.id]),this._makeRequest(s+"/artists/"+e.id+"/similar_artists.json?apikey="+this._APIKEY+this._paramsMarkup(e.optionalParams))}},{key:"searchEvents",value:function(e){return e.searchBy&&(e.searchBy.artist_name||e.searchBy.location)||console.log(i),Object.keys(e.searchBy).length>3&&console.log(o),this._makeRequest(s+"/events.json?apikey="+this._APIKEY+this._paramsMarkup(e.searchBy)+this._paramsMarkup(e.optionalParams))}},{key:"searchArtists",value:function(e){return this._checkRequiredParams([e.query]),this._makeRequest(s+"/search/artists.json?apikey="+this._APIKEY+"&query="+e.query+this._paramsMarkup(e.optionalParams))}},{key:"searchVenues",value:function(e){return this._checkRequiredParams([e.query]),this._makeRequest(s+"/search/venues.json?apikey="+this._APIKEY+"&query="+e.query+this._paramsMarkup(e.optionalParams))}},{key:"searchLocations",value:function(e){e.searchBy&&(e.searchBy.query||e.searchBy.location)||console.log(i),Object.keys(e.searchBy).length>1&&console.log(o);var r=e.searchBy.query?"query="+e.searchBy.query:"location="+e.searchBy.location;return this._makeRequest(s+"/search/locations.json?"+r+"&apikey="+this._APIKEY+this._paramsMarkup(e.optionalParams))}},{key:"_paramsMarkup",value:function(e){var r="";return e&&Object.entries(e).forEach(function(e){var t=a(e,2),n=t[0],s=t[1];return r+="&"+n+"="+s}),r}},{key:"_makeRequest",value:function(e){var r=this;return new Promise(function(t,a){r._requestUrl=e;var n=new XMLHttpRequest;n.open("GET",e),n.onload=function(){return 200===n.status?t(JSON.parse(n.responseText).resultsPage):""},n.send()})}},{key:"_checkRequiredParams",value:function(e){e.forEach(function(e){e||console.log(i)})}},{key:"_checkParamValue",value:function(e,r){r.some(function(r){return e===r})||console.log('Error: "'+e+'" is not a valid value. See library documentation.')}},{key:"requestUrl",get:function(){return this._requestUrl}}]),e}();r.default=u},function(e,r,t){e.exports=t(0).default},function(e,r,t){e.exports=t(1)}])},"object"==i(r)&&"object"==i(e)?e.exports=s():(a=[],void 0===(n="function"==typeof(t=s)?t.apply(r,a):t)||(e.exports=n))}).call(this,t(0)(e))},function(e,r,t){"use strict";var a,n=t(1);new((a=n)&&a.__esModule?a:{default:a}).default("KwvChI9jW9D3aYSd").getUserTrackings({username:"pedromuraki",trackingObject:"artists",optionalParams:{page:1,per_page:25,fields:"displayName",created_after:"2018-02-28T13:37:00Z"}}).then(function(e){console.log(e)})},function(e,r,t){e.exports=t(2)}]);
//# sourceMappingURL=app.bundle.js.map