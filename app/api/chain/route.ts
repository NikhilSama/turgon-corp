

import {
    LangChainStream,
    StreamingTextResponse,
    experimental_StreamData,
  } from 'ai';
  import { LLMChain } from 'langchain/chains';
  import { OpenAI } from '@langchain/openai';
  import { PromptTemplate } from '@langchain/core/prompts';
  
  export const runtime = 'edge';
  
  export async function POST(req: Request) {
    const { prompt: value } = await req.json();
    console.log("product is: ", { prompt: value});
  
    const model = new OpenAI({
      modelName: "gpt-3.5-turbo",    
      temperature: 0,
      streaming: true
    });
  
    const prompt = PromptTemplate.fromTemplate(
      'What is a good name for a company that makes {product}?',
    );
  
    const chain = new LLMChain({ llm: model, prompt });
  
    const data = new experimental_StreamData();
  
    // important: use LangChainStream from the AI SDK:
    const { stream, handlers } = LangChainStream({
      onFinal: () => {
        data.append(JSON.stringify({ key: 'value' })); // example
        data.close();
      },
      experimental_streamData: true,
    });
  
    await chain.stream({ product: value }, { callbacks: [handlers] });
  
    return new StreamingTextResponse(stream, {}, data);
  }
  