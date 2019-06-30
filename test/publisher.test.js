const sinon = require('sinon');
const chai = require('chai');
const expect = chai.expect;
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const SeeYouInSpace = require('../core/integrations/seeYouInSpace');

describe('Publisher', () => {
  beforeEach(() => {
    sinon.restore();
  });

  it('should return a new token', () => {
    const integration = new SeeYouInSpace(
      {
        httpHelper: {
          post: sinon.fake.resolves({ data: { data: { token: 'novotoken' } } }),
        },
      },
      'chave',
    );

    return expect(integration.getToken()).to.eventually.be.equal('novotoken');
  });

  it('should throw an error when sending invalid key', () => {
    const integration = new SeeYouInSpace(
      {
        httpHelper: {
          post: sinon.fake.rejects('error'),
        },
      },
      'chave',
    );

    return expect(
      integration.getToken('chaveinvalida'),
    ).to.eventually.be.rejectedWith('error');
  });

  it('should publish message successfully', () => {
    const integration = new SeeYouInSpace(
      {
        httpHelper: {
          post: sinon.fake.resolves(undefined),
        },
      },
      'chave',
    );

    sinon.stub(integration, 'getToken').returns('validtoken');

    integration.publish.bind(integration);

    return expect(
      integration.publish({ data: 'fake message' }),
    ).to.eventually.be.equal(undefined);
  });

  it('should not publish message', () => {
    const integration = new SeeYouInSpace(
      {
        httpHelper: {
          post: sinon.fake.rejects('error'),
        },
      },
      'chave',
    );

    sinon.stub(integration, 'getToken').returns('validtoken');

    return expect(
      integration.publish({ data: 'fake message' }),
    ).to.eventually.be.rejectedWith('error');
  });
});
