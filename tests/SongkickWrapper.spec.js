import { expect } from 'chai';
import SongkickWrapper from '../src/js/SongkickWrapper.js';

const songkick = new SongkickWrapper('KwvChI9jW9D3aYSd');

describe('SongkickWrapper', () => {
  it('Should exist the class SongkickWrapper', () => {
    expect(SongkickWrapper).to.exist;
    expect(songkick).to.be.an.instanceof(SongkickWrapper);
  });

  context('Properties', () => {
    it('Should define a property _APIKEY when the SongkickWrapper class is instantiated', () => {
      expect(songkick).to.have.property('_APIKEY', 'KwvChI9jW9D3aYSd');
    });

    it.skip('Should define a property _requestUrl when a request is made after calling some of the main methods', () => {
      songkick.getUpcomingEvents({ from: 'artists', id: '379603' });
      expect(songkick).to.have.property('_requestUrl');
    });
  });

  context('Methods', () => {
    context('Main methods', () => {
      context('getUpcomingEvents', () => {
        it('Should exist the method getUpcomingEvents', () => {
          expect(songkick).to.have.property('getUpcomingEvents').that.is.a('function');
        });
      });
      context('getPastEvents', () => {
        it('Should exist the method getPastEvents', () => {
          expect(songkick).to.have.property('getPastEvents').that.is.a('function');
        });
      });
    });

    context('Helper methods', () => {
      context('_makeRequest', () => {
        it('Should exist the helper method _makeRequest', () => {
          expect(songkick).to.have.property('_makeRequest').that.is.a('function');
        });
      });
      context('_paramsMarkup', () => {
        it('Should exist the helper method _paramsMarkup', () => {
          expect(songkick).to.have.property('_paramsMarkup').that.is.a('function');
        });
      });
      context('_checkRequiredParams', () => {
        it('Should exist the helper method _checkRequiredParams', () => {
          expect(songkick).to.have.property('_checkRequiredParams').that.is.a('function');
        });
      });
      context('_checkParamValue', () => {
        it('Should exist the helper method _checkParamValue', () => {
          expect(songkick).to.have.property('_checkParamValue').that.is.a('function');
        });
      });
    });
  });
});
