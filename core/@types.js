/**
 * @typedef Container
 * @property {Helpers} helpers
 * @property {Integrations} integrations
 */

/**
 * @typedef Config
 * @property {String} baseUrl
 */

/**
 * @typedef Helpers
 * @property {import('./helpers/httpHelper')} httpHelper
 */

/**
 * @typedef Integrations
 * @property {import('./integrations/seeYouInSpace').SeeYouInSpaceIntegration} seeYouInSpace
 */

/**
 * @typedef Message
 * @property {Object} data
 */

/**
 * @typedef HttpPostData
 * @property {String} url
 * @property {Object} data
 * @property {Object=} headers
 */

/**
 * @typedef Request
 * @property {Message} body
 */

export {};
