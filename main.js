import * as server from './server';

const logErrors = (error) => {
  server.logger.error(error.message, {stack: error.stack});
};

process.on('uncaughtException', logErrors);
process.on('unhandledRejection', (error) => {
  console.log(error);
});

server.app.start();
