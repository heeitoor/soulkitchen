const mocha = require('mocha');
const { expect, assert } = require('chai');
const sinon = require('sinon');

class DateBusiness {
  /**
   *
   * @param {DateService} dateService
   */
  constructor(dateService) {
    this.dateService = dateService;
  }

  /**
   * @returns {Date}
   */
  getNow() {
    console.log('!!!');
    return this.dateService.get();
  }
}

class DateService {
  /**
   * @returns {Date}
   */
  get() {
    return require('moment')().toDate();
  }
}

describe('Date', () => {
  it('should match dd/mm/yyyy', () => {
    const dateNow = require('moment')().toDate();
    const s = new DateService();
    const get = sinon.stub(s, 'get');
    get.returns(null);

    const sss = new DateBusiness(s);

    const v = sss.getNow();

    expect(v).to.be.eql(dateNow);

    // const fake = {
    //   get: () => {
    //       return null;
    //   },
    // };
    // const dateBusiness = new DateBusiness(fake);
    // const dateNow = require('moment')().toDate();
    // assert.equal(dateNow.getDate(), dateBusiness.getNow().getDate());
  });
});
