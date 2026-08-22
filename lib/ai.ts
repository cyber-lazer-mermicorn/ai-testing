import OpenAI from 'openai';

function getOpenAIClient(): OpenAI {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is required to call the OpenAI API.');
  }
  return new OpenAI({ apiKey });
}

export async function generateText(prompt: string) {
  try {
    const response = await getOpenAIClient().chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 1024,
    });
    return response.choices[0].message.content;
  } catch (error: any) {
    throw new Error(`AI error: ${error?.message || 'Unknown error'}`);
  }
}

export async function classifyText(text: string) {
  try {
    const response = await getOpenAIClient().chat.completions.create({
      model: 'gpt-4-turbo-preview',
      messages: [
        { role: 'system', content: 'Classify the text into: positive, negative, neutral' },
        { role: 'user', content: text },
      ],
    });
    return response.choices[0].message.content;
  } catch (error: any) {
    throw new Error(`Classification error: ${error?.message || 'Unknown error'}`);
  }
}
