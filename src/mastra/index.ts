import { Mastra } from '@mastra/core/mastra';

import { defaultLogger as logger } from '../lib/logger';
import { defaultStorage as storage } from '../lib/storage';
import { weather } from './mcp/server';

const mcpServers = {
  weather,
};

export const mastra = new Mastra({
  logger,
  mcpServers,
  storage,
});
