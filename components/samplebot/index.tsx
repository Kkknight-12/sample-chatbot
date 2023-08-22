'use client';

import React, { useState } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState<any>([]);
  const [input, setInput] = useState<any>('');

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    setMessages([...messages, { text: input, user: true }]);

    const chatbotResponse =
      "Hello! I'm your chatbot. How can I assist you today?";

    setMessages([...messages, { text: chatbotResponse, user: false }]);

    setInput('');
  };

  return (
    <div className='flex flex-col items-center justify-center h-[95vh] gap-4'>
      <div className='flex-grow bg-gray-100 p-4 overflow-auto w-1/3 rounded'>
        <div className='flex flex-col-reverse gap-4'>
          {messages.map((message, index) => (
            <div
              key={index}
              className={`rounded-lg p-2 ${
                message.user
                  ? 'bg-blue-300 text-white self-end'
                  : 'bg-gray-300 text-black self-start'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
      </div>
      <form className='bg-white p-4 w-1/3 rounded' onSubmit={handleSubmit}>
        <div className='flex space-x-2'>
          <input
            type='text'
            value={input}
            onChange={handleInputChange}
            className='flex-grow border rounded-lg p-2'
            placeholder='Type your message...'
          />
          <button
            type='submit'
            className='bg-blue-500 text-white rounded-lg p-2'
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;
