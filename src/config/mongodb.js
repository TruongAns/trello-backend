/**

 */
import { env } from '~/config/environment';

const { MongoClient, ServerApiVersion } = require('mongodb');

const url = env.MONGODB_URI;
const dbName = env.DATABASE_NAME;

let trelloDatabaseInstance = null;

const client = new MongoClient(url, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true
  }
});

export const CONNECT_DB = async () => {
  console.log('Start Connecting to MongoDb...');
  await client.connect();
  console.log('Connected Success to MongoDb...');
  trelloDatabaseInstance = client.db(dbName);
};

export const GET_DB = () => {
  if (!trelloDatabaseInstance) throw new Error('Must connect to Database First');
  return trelloDatabaseInstance;
};

export const CLOSE_DB = async () => {
  console.log('Starting to disconnect from the database');
  await client.close();
  trelloDatabaseInstance = null;
  console.log('Database disconnected successfully');
};
