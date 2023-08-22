'use client';

import React, { useState } from 'react';
import { useChat } from 'ai/react';

const Chatbot = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat();

  return (
    <div className='container mx-auto max-w-[700px]'>
      <div className='flex flex-col h-screen bg-gray-900'>
        <div className='flex-grow p-6'>
          <div className='flex flex-col space-y-4 '>
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex p-2 ${
                  message.role === 'user' ? ' justify-end' : ' justify-start'
                }`}
              >
                <div
                  className={`${
                    message.role === 'user'
                      ? 'bg-purple-500 clip-right ps-1 rounded-s-md'
                      : 'bg-gray-800 clip-left pe-1 rounded-e-md'
                  }   p-5 text-white max-w-sm`}
                >
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className='flex-none p-6' onSubmit={handleSubmit}>
          <div className='flex rounded-lg border border-gray-700 bg-gray-800'>
            <input
              type='text'
              value={input}
              onChange={handleInputChange}
              className='flex-grow px-4 py-2 bg-transparent text-white focus:outline-none'
              placeholder='Type your message...'
            />
            <button
              type='submit'
              className='bg-purple-500 rounded-lg px-4 py-2 text-white font-semibold focus:outline-none hover:bg-purple-600 transition-colors duration-300'
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot;
