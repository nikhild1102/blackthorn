import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import methodOverride from 'method-override';
import logger from './logger';
import Responder from './expressResponder';
import compression from 'compression';
import helmet from 'helmet';
import routesInitiator from '../routes';
// import registerInternalAuthStrategy from '../app/authStrategies/passport'
import cors from 'cors';
import i18n from 'i18n';

// Initialize express app
const app = express();

const initMiddleware = () => {
  // Helmet is a collection of 12 middleware to help set some security headers.
  app.use(helmet());
  // Showing stack errors
  app.set('showStackError', true);

  // Enable jsonp
  app.enable('jsonp callback');

  app.use((req, res, next) => {
    req.logger = logger;
    next();
  });

  app.use((req, res, next) => {
    if (req.headers['accept-language'] && req.headers['accept-language']!='' ) {
      i18n.setLocale(req.headers['accept-language']);
    }
    next();
  });

  // Enable logger (morgan)
  app.use(morgan('combined', {stream: logger.stream}));

  // Request body parsing middleware should be above methodOverride
  app.use(bodyParser.json({
    extended: true,
  }));

  app.use(express.static('uploads/'));

  app.use(methodOverride());
  app.use(cors());
  app.use(compression());
};

const catchNotFound = () => {
  app.use('*', (req, res, next) => {
    Responder.operationFailed(res, {status: 404, message: 'Invalid Url'});
  });
};

const initErrorRoutes = () => {
  app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    logger.error(err.stack);
    Responder.operationFailed(res, {status: 400, message: 'Bad request'});
  });
};

const init = () => {
  // Initialize Express middleware
  initMiddleware();

  // Initialize modules server routes
  routesInitiator(app);

  // Initialize error routes
  initErrorRoutes();

  catchNotFound();

  return app;
};

export default {init};
