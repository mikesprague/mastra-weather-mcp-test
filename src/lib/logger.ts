import { PinoLogger } from '@mastra/loggers';

export const defaultLogger = new PinoLogger({
  name: 'Mastra',
  level: 'info',
});

export const debugLogger = new PinoLogger({
  name: 'Mastra',
  level: 'debug',
});

export default defaultLogger;
