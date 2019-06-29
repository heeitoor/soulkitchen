require('dotenv').config();

const amqp = require('amqplib/callback_api');
const amqplib = require('amqplib');

/**
 * @param {import('http').IncomingMessage} request
 * @param {import('http').ServerResponse} response
 */
module.exports = (request, response) => {
  const { RABBITMQ_URL, QUEUE_NAME } = process.env;
  const { body } = request;

  console.log({ RABBITMQ_URL, QUEUE_NAME });
  console.log({ body });

  // amqp.connect(RABBITMQ_URL, (error, connection) => {
  //   connection.createChannel((error, channel) => {
  //     channel.assertQueue(QUEUE_NAME, {
  //       durable: false,
  //     });
  //     channel.sendToQueue(QUEUE_NAME, Buffer.from(JSON.stringify(body)));
  //   });
  // });

  console.log(amqplib);

  amqplib
    .connect(
      'amqp://ntiijmtg:bucd8reluIOlWUubKfgpRmweTotZfYmr@clam.rmq.cloudamqp.com/ntiijmtg',
    )
    .then((connection) => {
      console.log(1);
      connection.createChannel().then((channel) => {
        channel.assertQueue('queue', { durable: false });
        channel.sendToQueue('queue', Buffer.from(JSON.stringify(body)));
      });
    })
    .catch(() => {
      console.log('oisaias');
    });

  response.end(JSON.stringify(process.env));
};
