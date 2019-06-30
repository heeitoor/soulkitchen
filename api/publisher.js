const SeeYouInSpaceIntegration = require('../core/integrations/seeYouInSpace');
const HttpHelper = require('../core/helpers/httpHelper');
const env = require('../core/env');

/**
 * @param {import('../core/@types').Request} request
 * @param {import('http').ServerResponse} response
 */
const handler = async (request, response) => {
  let result = undefined;

  try {
    const integration = new SeeYouInSpaceIntegration(
      {
        httpHelper: new HttpHelper({
          baseUrl: env.SEEYOUINSPACE_URL,
        }),
      },
      env.TKN_SCRT,
    );

    await integration.publish({
      data: request.body,
    });

    result = { ok: true };
  } catch (error) {
    result = { ok: false };
  }

  response.end(JSON.stringify(result));
};

module.exports = handler;
