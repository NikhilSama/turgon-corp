'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className="mx-auto w-full max-w-md py-24 flex flex-col stretch">
      {messages.length > 0
        ? messages.map(m => (<>
            <div key={m.id} className="whitespace-pre-wrap">
              {m.role === 'user' ? 'You: ' : 'Turgon AI: '}
              {m.content}
            </div>
            <br/>
            </>
          ))
        : null}

      <form onSubmit={handleSubmit}>
        <input
          className="w-full max-w-md bottom-0 border border-white rounded mb-8 shadow-xl p-2 bg-transparent"
          value={input}
          placeholder="Ask Turgon AI anything..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
