const axios = require('axios');

class HttpHelper {
  /**
   * @param {import('../@types').Config} config
   */
  constructor(config) {
    /**
     * @type {import('axios').AxiosInstance}
     */
    this.http = axios.create({
      baseURL: config.baseUrl,
    });
  }

  /**
   * @param {import('../@types').HttpPostData} postData
   * @return {Promise<import('axios').AxiosResponse<any>>}
   */
  async post(postData) {
    return this.http.post(postData.url, postData.data, {
      headers: postData.headers,
    });
  }
}

module.exports = HttpHelper;
