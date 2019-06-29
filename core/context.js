class Context {}

class IntegrationContext {
  /**
   *
   * @param {import("./env").Env} env
   */
  constructor(env) {}

  publish() {}
}

class Controller {
  /**
   *
   * @param {import("http").RequestOptions} request
   * @param {import("http").ServerResponse} response
   */
  constructor(request, response) {
    this.request = request;
    this.response = response;
  }
}

class PublisherController extends Controller {
  /**
   *
   * @param {import("http").RequestOptions} request
   * @param {import("http").ServerResponse} response
   * @param {PublisherService} publisherService
   */
  constructor(request, response, publisherService) {
    super(request, response);
    this.publisherService = publisherService;
  }

  post() {
    return this.publisherService.run();
  }
}

class PublisherService {
  /**
   *
   * @param {IntegrationContext} integrationContext
   */
  constructor(integrationContext) {
    this.integrationContext = integrationContext;
  }

  run() {
    return (req, res) => {
      res.end('lala');
    };
  }
}

export { PublisherService, IntegrationContext, PublisherController };
