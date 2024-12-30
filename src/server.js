import express from 'express';
import { mapOrder } from '~/utils/sorts.js';
import { env } from '~/config/environment';
import { CONNECT_DB, GET_DB, CLOSE_DB } from '~/config/mongodb';
const exitHook = require('async-exit-hook');

const app = express();

const hostname = env.APP_HOST;
const port = env.APP_PORT;

const START_SERVER = () => {
  app.get('/', async (req, res) => {
    // Test Absolute import mapOrder
    console.log(await GET_DB().listCollections().toArray());

    console.log(
      mapOrder(
        [
          { id: 'id-1', name: 'One' },
          { id: 'id-2', name: 'Two' },
          { id: 'id-3', name: 'Three' },
          { id: 'id-4', name: 'Four' },
          { id: 'id-5', name: 'Five' }
        ],
        ['id-5', 'id-4', 'id-2', 'id-3', 'id-1'],
        'id'
      )
    );
    res.end('<h1>Hello World!</h1><hr>');
  });

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
