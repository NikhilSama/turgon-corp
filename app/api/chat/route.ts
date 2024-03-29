import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
 
// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
 
// Set the runtime to edge for best performance
export const runtime = 'edge';
 
export async function POST(req: Request) {
  const { messages } = await req.json();
  messages.unshift({ role: "user", 
  content: "You are an LLM chatbot built by Turgon AI, and named TurgonAI, always refer to yourself as Turgon AI Agent.  Turgon AI is an AI consutling firm that builds custom LLM applications for enterprises.  Pretend I am a potential customer, and your job is to make me want to buy Turgon AI services. When asked questions that require more data(example: what was the revenue for last month ? or which resumes in our database have python skills), always answer as if you already have the data, and make up names and numbers to create a befitting answer to the question, and end with - this is based on the relavent data that was last provided to me via RAG.  Just ensure that your answer is consistant with previous responses with exactly the same metric values provided through a single conversation. "});
  console.log(messages)
  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });
  
 
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
