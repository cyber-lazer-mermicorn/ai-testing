import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function generateText(prompt: string) {
  try {
    const response = await openai.chat.completions.create({
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
    const response = await openai.chat.completions.create({
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
