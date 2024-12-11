import React from 'react';

interface TextDisplayProps {
  targetText: string;
  currentText: string;
}

export default function TextDisplay({ targetText, currentText }: TextDisplayProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm backdrop-blur-lg bg-opacity-90">
      <div className="text-lg leading-relaxed font-mono relative">
        {targetText.split('').map((char, index) => {
          const userChar = currentText[index];
          const isError = userChar !== undefined && userChar !== char;
          const isCurrent = index === currentText.length;

          return (
            <span
              key={index}
              className={`relative ${
                isError ? 'text-red-500 bg-red-50' : 
                userChar ? 'text-green-600' : 
                'text-gray-700'
              }`}
            >
              {isCurrent && (
                <span className="absolute right-full top-0 border-l-2 border-indigo-500 h-full animate-pulse" />
              )}
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
}