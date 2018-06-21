import { expect } from 'chai';
import SongkickWrapper from '../src/js/SongkickWrapper.js';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

describe('SongkickWrapper', () => {
  it('Should exist the class SongkickWrapper', () => {
    expect(SongkickWrapper).to.exist;
    expect(songkick).to.be.an.instanceof(SongkickWrapper);
  });

  context('SongkickWrapper properties', () => {
    it('Should define a property _APIKEY when the SongkickWrapper class is instantiated', () => {
      expect(songkick).to.have.property('_APIKEY', 'KwvChI9jW9D3aYSd');
    });

    it.skip('Should define a property _requestUrl when a request is made', () => {
      songkick.getUpcomingEvents({ from: 'artists', id: '379603' });
      expect(songkick).to.have.property('_requestUrl');
    });
  });

  context('SongkickWrapper methods', () => {
    it('Should exist a method to get the upcoming events (getUpcomingEvents)', () => {
      expect(songkick).to.have.property('getUpcomingEvents').that.is.a('function');
    });
    it('Should exist a method to get the past events (getPastEvents)', () => {
      expect(songkick).to.have.property('getPastEvents').that.is.a('function');
    });

    context('Helper methods', () => {
      it('Should exist a helper method to make the request (_makeRequest)', () => {
        expect(songkick).to.have.property('_makeRequest').that.is.a('function');
      });
      it('Should exist a helper method to write the params markup that will be included in the request url (_paramsMarkup)', () => {
        expect(songkick).to.have.property('_paramsMarkup').that.is.a('function');
      });
      it('Should exist a helper method to check if the required params were passed in the main method (_checkRequiredParams)', () => {
        expect(songkick).to.have.property('_checkRequiredParams').that.is.a('function');
      });
      it('Should exist a helper method to check if the required params have accepted values (_checkParamValue)', () => {
        expect(songkick).to.have.property('_checkParamValue').that.is.a('function');
      });
    });
  });
});
