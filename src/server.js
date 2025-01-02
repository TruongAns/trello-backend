import express from 'express';
import { mapOrder } from '~/utils/sorts.js';
import { env } from '~/config/environment';
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb';
import { APIs_V1 } from './routes/v1';
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware';

const exitHook = require('async-exit-hook');

const app = express();

const hostname = env.APP_HOST;
const port = env.APP_PORT;

const START_SERVER = () => {
  // For parsing application/json
  app.use(express.json());
  // For parsing application/x-www-form-urlencoded
  app.use(express.urlencoded({ extended: true }));

  app.use('/v1', APIs_V1);

  app.use(errorHandlingMiddleware);

  app.listen(port, hostname, () => {
    // eslint-disable-next-line no-console
    console.log(`Hello DTA Dev, I am running at http://${hostname}:${port}/`);
  });

  exitHook(() => {
    CLOSE_DB();
  });
};

(async () => {
  try {
    await CONNECT_DB();
    START_SERVER();
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
})();
