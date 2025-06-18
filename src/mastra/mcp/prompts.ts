import type { MCPServerPrompts } from '@mastra/mcp';

const prompts = [
  {
    name: 'getWeather',
    description: 'Get current weather for a location (city name or zip code).',
    version: '1.0.0',
  },
];

const getPromptMessages: MCPServerPrompts['getPromptMessages'] = async ({
  name,
  args,
}) => {
  const prompt = prompts.find((p) => p.name === name);
  if (!prompt) {
    throw new Error(`Prompt "${name}" not found`);
  }

  switch (name) {
    case 'getWeather': {
      if (!args.location) {
        throw new Error('No location provided');
      }
      return [
        {
          role: 'user',
          content: {
            type: 'text',
            text: `Get current weather for ${args.location}.`,
          },
        },
      ];
    }
    default:
      throw new Error(`Prompt "${name}" not found`);
  }
};

export const promptHandlers: MCPServerPrompts = {
  listPrompts: async () => prompts,
  getPromptMessages: getPromptMessages,
};
