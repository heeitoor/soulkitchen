require('dotenv').config();

/**
 * @param {import('http').RequestOptions} request
 * @param {import('http').ServerResponse} response
 */
module.exports = (request, response) => {
  response.end(process.env);
};

// const moment = require('moment');

// console.log(this);
// //require('../core/context');
// import {
//   Publisher,
//   IntegrationContext,
//   PublisherController,
//   PublisherService,
// } from '../core/context';
// import env from '../core/env';
// /**
//  * @param {import('http').RequestOptions} request
//  * @param {import('http').ServerResponse} response
//  */
// // module.exports = (request, response) => {
// //   const currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');

// //   response.end(currentTime);
// // };

// // module.exports = new Publisher(new IntegrationContext(env)).run();
// module.exports = (request, response) => {
//   new PublisherController(
//     request,
//     response,
//     new PublisherService(new IntegrationContext()),
//   );
// };
