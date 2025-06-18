import { MongoDBStore } from '@mastra/mongodb';
import { config } from 'dotenv';

config();

const { MONGO_ATLAS_CONNECTION_STRING } = process.env;

export const defaultStorage = new MongoDBStore({
  url: MONGO_ATLAS_CONNECTION_STRING,
  dbName: 'mastra-weather-mcp-test',
});

export default defaultStorage;
