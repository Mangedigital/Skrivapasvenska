import React from 'react';
import { Volume2 } from 'lucide-react';

interface TextDisplayProps {
  targetText: string;
  currentText: string;
}

declare global {
  interface Window {
    responsiveVoice: {
      speak: (text: string, voice: string, options?: object) => void;
      cancel: () => void;
      isPlaying: () => boolean;
    };
  }
}

export default function TextDisplay({ targetText, currentText }: TextDisplayProps) {
  const handleSpeak = () => {
    if (window.responsiveVoice.isPlaying()) {
      window.responsiveVoice.cancel();
    } else {
      window.responsiveVoice.speak(targetText, "Swedish Female", {
        rate: 0.9,
        pitch: 1,
        onend: () => {
          console.log("Finished speaking");
        }
      });
    }
  };

  return (
    <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm backdrop-blur-lg bg-opacity-90">
      <div className="flex justify-between items-start mb-4">
        <div className="text-base md:text-lg leading-relaxed font-mono relative flex-grow">
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
        <button
          onClick={handleSpeak}
          className="ml-4 p-2 text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 rounded-full transition-colors"
          title="Lyssna på texten"
        >
          <Volume2 className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>
    </div>
  );
}