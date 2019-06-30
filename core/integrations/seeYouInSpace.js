class SeeYouInSpaceIntegration {
  /**
   * @param {import('../@types').Helpers} helpers
   */
  constructor(helpers, masterKey) {
    this.httpHelper = helpers.httpHelper;
    this.masterKey = masterKey;
  }

  /**
   * @return {Promise<String>} token
   */
  async getToken() {
    const masterKey = this.masterKey;

    const response = await this.httpHelper.post({
      url: '/token',
      data: { masterKey },
    });

    const { data } = response.data;

    return data.token;
  }

  /**
   * @param {import('../@types').Message} message
   */
  async publish(message) {
    const token = await this.getToken(this.masterKey);

    await this.httpHelper.post({
      url: '/rabbitmq',
      data: message,
      headers: {
        Authorization: token,
      },
    });
  }

  /**
   */
  consume() {}
}

module.exports = SeeYouInSpaceIntegration;
