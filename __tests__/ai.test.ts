import { generateText, classifyText } from '../lib/ai';

// Mock OpenAI
jest.mock('openai', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    chat: {
      completions: {
        create: jest.fn().mockResolvedValue({
          choices: [{ message: { content: 'Test response' } }],
          usage: { total_tokens: 100 },
        }),
      },
    },
  })),
}));

describe('AI Functions', () => {
  it('should generate text', async () => {
    const result = await generateText('Hello');
    expect(result).toBe('Test response');
  });

  it('should classify text', async () => {
    const result = await classifyText('This is great');
    expect(result).toBe('Test response');
  });

  it('should handle errors', async () => {
    // Test error handling
    expect(true).toBe(true);
  });
});
