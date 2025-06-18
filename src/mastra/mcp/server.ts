import { MCPServer } from '@mastra/mcp';

import { promptHandlers } from './prompts';
import { tools } from './tools';

export const weather = new MCPServer({
  name: 'weather',
  description:
    'Weather MCP Server - provides current weather for a location by city name or zip code.',
  id: 'weather',
  version: '0.1.0',
  tools: {
    getWeather: tools.getWeather,
  },
  prompts: promptHandlers,
});
