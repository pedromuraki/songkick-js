import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import chaiAsPromised from 'chai-as-promised';
import SongkickWrapper from '../src/SongkickWrapper.js';

chai.use(sinonChai);
chai.use(chaiAsPromised);

const API_URL = 'http://api.songkick.com/api/3.0';
const APIKEY = 'KwvChI9jW9D3aYSd';
const songkick = new SongkickWrapper(APIKEY);

describe('SongkickWrapper', () => {
  it('Should exist the class SongkickWrapper', () => {
    expect(SongkickWrapper).to.exist;
    expect(songkick).to.be.an.instanceof(SongkickWrapper);
  });

  // PROPERTIES
  describe('Properties', () => {
    it('Should define a property _APIKEY when the SongkickWrapper class is instantiated', () => {
      expect(songkick).to.have.property('_APIKEY', 'KwvChI9jW9D3aYSd');
    });
  });

  // METHODS
  describe('Methods', () => {
    // MAIN METHODS
    describe('Main methods', () => {
      // GET UPCOMING EVENTS
      describe('getUpcomingEvents', () => {
        it('Should exist the method getUpcomingEvents', () => {
          expect(songkick).to.have.property('getUpcomingEvents').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.getUpcomingEvents({ from: 'artists', id: '379603' });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.getUpcomingEvents({ from: 'artists', id: '379603' });
            expect(stubed).to.have.been.calledWith(`${API_URL}/artists/379603/calendar.json?apikey=${APIKEY}`);
          });
          it('Should call _makeRequest method with the correct url (with user and reason params)', () => {
            songkick.getUpcomingEvents({
              from: 'users',
              id: 'pedromuraki',
              reason: 'tracked_artist',
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/users/pedromuraki/calendar.json?reason=tracked_artist&apikey=${APIKEY}`);
          });
          it('Should call _makeRequest method with the correct url (with optional params)', () => {
            songkick.getUpcomingEvents({
              from: 'venues',
              id: '1081601',
              optionalParams: {
                min_date: '2018/01/01',
                max_date: '2018/06/01',
                page: 5,
                per_page: 15,
                order: 'desc',
              },
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/venues/1081601/calendar.json?apikey=${APIKEY}&min_date=2018/01/01&max_date=2018/06/01&page=5&per_page=15&order=desc`);
          });
        });
      });
      // GET PAST EVENTS
      describe('getPastEvents', () => {
        it('Should exist the method getPastEvents', () => {
          expect(songkick).to.have.property('getPastEvents').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.getPastEvents({ from: 'artists', id: '379603' });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.getPastEvents({ from: 'artists', id: '379603' });
            expect(stubed).to.have.been.calledWith(`${API_URL}/artists/379603/gigography.json?apikey=${APIKEY}`);
          });
          it('Should call _makeRequest method with the correct url (with optional params)', () => {
            songkick.getPastEvents({
              from: 'users',
              id: 'pedromuraki',
              optionalParams: {
                min_date: '2018/01/01',
                max_date: '2018/06/01',
                page: 3,
                per_page: 12,
                order: 'asc',
              },
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/users/pedromuraki/gigography.json?apikey=${APIKEY}&min_date=2018/01/01&max_date=2018/06/01&page=3&per_page=12&order=asc`);
          });
        });
      });
      // GET DETAILS
      describe('getDetails', () => {
        it('Should exist the method getDetails', () => {
          expect(songkick).to.have.property('getDetails').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.getDetails({ from: 'artists', id: '379603' });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.getDetails({ from: 'artists', id: '379603' });
            expect(stubed).to.have.been.calledWith(`${API_URL}/artists/379603.json?apikey=${APIKEY}`);
          });
        });
      });
      // GET USER TRACKINGS
      describe('getUserTrackings', () => {
        it('Should exist the method getUserTrackings', () => {
          expect(songkick).to.have.property('getUserTrackings').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.getUserTrackings({ username: 'pedromuraki', trackingObject: 'artists' });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.getUserTrackings({ username: 'pedromuraki', trackingObject: 'artists' });
            expect(stubed).to.have.been.calledWith(`${API_URL}/users/pedromuraki/artists/tracked.json?apikey=${APIKEY}`);
          });
          it('Should call _makeRequest method with the correct url (with optional params)', () => {
            songkick.getUserTrackings({
              username: 'pedromuraki',
              trackingObject: 'artists',
              optionalParams: {
                page: 1,
                per_page: 10,
                fields: 'id,displayName',
                created_after: '2018-02-28T13:37:00Z',
              },
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/users/pedromuraki/artists/tracked.json?apikey=${APIKEY}&page=1&per_page=10&fields=id,displayName&created_after=2018-02-28T13:37:00Z`);
          });
        });
      });
      // GET USER MUTED ARTISTS
      describe('getUserMutedArtists', () => {
        it('Should exist the method getUserMutedArtists', () => {
          expect(songkick).to.have.property('getUserMutedArtists').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.getUserMutedArtists({ username: 'pedromuraki' });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.getUserMutedArtists({ username: 'pedromuraki' });
            expect(stubed).to.have.been.calledWith(`${API_URL}/users/pedromuraki/artists/muted.json?apikey=${APIKEY}`);
          });
          it('Should call _makeRequest method with the correct url (with optional params)', () => {
            songkick.getUserMutedArtists({
              username: 'pedromuraki',
              optionalParams: {
                page: 1,
                per_page: 10,
                fields: 'id,displayName',
                created_after: '2018-02-28T13:37:00Z',
              },
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/users/pedromuraki/artists/muted.json?apikey=${APIKEY}&page=1&per_page=10&fields=id,displayName&created_after=2018-02-28T13:37:00Z`);
          });
        });
      });
      // IS USER TRACKING
      describe('isUserTracking', () => {
        it('Should exist the method isUserTracking', () => {
          expect(songkick).to.have.property('isUserTracking').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.isUserTracking({ username: 'pedromuraki', trackingObject: 'artist', id: '379603' });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.isUserTracking({ username: 'pedromuraki', trackingObject: 'artist', id: '379603' });
            expect(stubed).to.have.been.calledWith(`${API_URL}/users/pedromuraki/trackings/artist:379603.json?apikey=${APIKEY}`);
          });
        });
      });
      // GET SIMILAR ARTISTS
      describe('getSimilarArtists', () => {
        it('Should exist the method getSimilarArtists', () => {
          expect(songkick).to.have.property('getSimilarArtists').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.getSimilarArtists({ id: '379603' });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.getSimilarArtists({
              id: '379603',
              optionalParams: {
                page: 2,
                per_page: 20,
              }
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/artists/379603/similar_artists.json?apikey=${APIKEY}&page=2&per_page=20`);
          });
        });
      });
      // SEARCH EVENTS
      describe('searchEvents', () => {
        it('Should exist the method searchEvents', () => {
          expect(songkick).to.have.property('searchEvents').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.searchEvents({
              searchBy: {
                artist_name: 'vintage+culture',
              }
            });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.searchEvents({
              searchBy: {
                artist_name: 'vintage+culture',
              }
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/events.json?apikey=${APIKEY}&artist_name=vintage+culture`);
          });
          it('Should call _makeRequest method with the correct url (with optional params)', () => {
            songkick.searchEvents({
              searchBy: {
                artist_name: 'vintage+culture',
              },
              optionalParams: {
                type: 'Festival',
                page: 3,
                per_page: 5,
              }
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/events.json?apikey=${APIKEY}&artist_name=vintage+culture&type=Festival&page=3&per_page=5`);
          });
        });
      });
      // SEARCH ARTISTS
      describe('searchArtists', () => {
        it('Should exist the method searchArtists', () => {
          expect(songkick).to.have.property('searchArtists').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.searchArtists({
              query: 'vintage+culture',
            });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.searchArtists({
              query: 'vintage+culture',
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/search/artists.json?apikey=${APIKEY}&query=vintage+culture`);
          });
          it('Should call _makeRequest method with the correct url (with optional params)', () => {
            songkick.searchArtists({
              query: 'vintage+culture',
              optionalParams: {
                page: 3,
                per_page: 5,
              }
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/search/artists.json?apikey=${APIKEY}&query=vintage+culture&page=3&per_page=5`);
          });
        });
      });
      // SEARCH VENUES
      describe('searchVenues', () => {
        it('Should exist the method searchVenues', () => {
          expect(songkick).to.have.property('searchVenues').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.searchVenues({
              query: 'clash+club',
            });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.searchVenues({
              query: 'clash+club',
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/search/venues.json?apikey=${APIKEY}&query=clash+club`);
          });
          it('Should call _makeRequest method with the correct url (with optional params)', () => {
            songkick.searchVenues({
              query: 'clash+club',
              optionalParams: {
                page: 3,
                per_page: 5,
              }
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/search/venues.json?apikey=${APIKEY}&query=clash+club&page=3&per_page=5`);
          });
        });
      });
      // SEARCH LOCATIONS
      describe('searchLocations', () => {
        it('Should exist the method searchLocations', () => {
          expect(songkick).to.have.property('searchLocations').that.is.a('function');
        });
        describe('_makeRequest', () => {
          let stubed;
          beforeEach(() => {
            stubed = sinon.stub(songkick, '_makeRequest');
          });
          afterEach(() => {
            stubed.restore();
          });
          it('Should call _makeRequest method', () => {
            songkick.searchLocations({
              searchBy: {
                query: 'sao',
              }
            });
            expect(stubed).to.have.been.calledOnce;
          });
          it('Should call _makeRequest method with the correct url (with required params)', () => {
            songkick.searchLocations({
              searchBy: {
                query: 'sao',
              }
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/search/locations.json?query=sao&apikey=${APIKEY}`);
          });
          it('Should call _makeRequest method with the correct url (with optional params)', () => {
            songkick.searchLocations({
              searchBy: {
                query: 'sao',
              },
              optionalParams: {
                page: 3,
                per_page: 5,
              }
            });
            expect(stubed).to.have.been.calledWith(`${API_URL}/search/locations.json?query=sao&apikey=${APIKEY}&page=3&per_page=5`);
          });
        });
      });
    });

    // HELPER METHODS
    describe('Helper methods', () => {
      describe('_makeRequest', () => {
        it('Should exist the helper method _makeRequest', () => {
          expect(songkick).to.have.property('_makeRequest').that.is.a('function');
        });
        // it('Should return a resolved promise with a JSON object with prop status === ok', () => {
        //   const promise = songkick._makeRequest(`${API_URL}/artists/379603/calendar.json?apikey=${APIKEY}`);
        //   return expect(promise).to.be.a('promise').and.to.eventually.have.property('status', 'ok');
        // });
      });
      describe('_paramsMarkup', () => {
        it('Should exist the helper method _paramsMarkup', () => {
          expect(songkick).to.have.property('_paramsMarkup').that.is.a('function');
        });
        it('Should return a string with the parameters markup', () => {
          expect(songkick._paramsMarkup({ min_date: '2018/01/01', max_date: '2018/06/01', page: 5, per_page: 15, order: 'desc' })).to.be.equal('&min_date=2018/01/01&max_date=2018/06/01&page=5&per_page=15&order=desc');
        });
      });
      describe('_checkRequiredParams', () => {
        it('Should exist the helper method _checkRequiredParams', () => {
          expect(songkick).to.have.property('_checkRequiredParams').that.is.a('function');
        });
        it('Should log an error message if some required param is undefined', () => {
          const stubed = sinon.stub(console, 'log');
          songkick._checkRequiredParams([undefined]);
          expect(stubed).to.have.been.calledWith('Error: Required parameter(s) missing. See library documentation.');
          stubed.restore();
        });
      });
      describe('_checkParamValue', () => {
        it('Should exist the helper method _checkParamValue', () => {
          expect(songkick).to.have.property('_checkParamValue').that.is.a('function');
        });
        it('Should log an error message if some param value is not accepted', () => {
          const stubed = sinon.stub(console, 'log');
          songkick._checkParamValue('somevalue', ['artists', 'venues', 'metro_areas', 'users']);
          expect(stubed).to.have.been.calledWith('Error: "somevalue" is not a valid value. See library documentation.');
          stubed.restore();
        });
      });
    });

    // GETTER METHODS
    describe('Getter methods', () => {
      describe('requestUrl', () => {
        it('Should exist the getter method requestUrl', () => {
          expect(songkick.requestUrl).to.exist;
        });
        it('Should return a string with the request url', () => {
          songkick.getUpcomingEvents({ from: 'artists', id: '379603' });
          expect(songkick.requestUrl).to.be.equal(`${API_URL}/artists/379603/calendar.json?apikey=${APIKEY}`);
        });
      });
    });
  });
});
