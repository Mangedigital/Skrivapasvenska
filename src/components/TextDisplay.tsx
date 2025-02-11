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

  // Dela upp texterna i ord och skiljetecken
  const splitText = (text: string) => {
    return text.split(/(\s+|[.,!?])/).filter(Boolean);
  };

  const targetSegments = splitText(targetText);
  const currentSegments = splitText(currentText);

  // Hitta det aktuella segmentet som användaren skriver på
  const currentSegmentIndex = currentSegments.length;

  return (
    <div className="bg-white p-4 md:p-8 rounded-2xl shadow-sm backdrop-blur-lg bg-opacity-90">
      <div className="flex justify-between items-start mb-4">
        <div className="text-base md:text-lg leading-relaxed font-mono relative flex-grow">
          {targetSegments.map((segment, index) => {
            const userSegment = currentSegments[index];
            const isCurrent = index === currentSegmentIndex;
            
            // Kontrollera om segmentet är ett mellanslag eller skiljetecken
            const isPunctuation = /^[.,!?]$/.test(segment);
            const isSpace = /^\s+$/.test(segment);

            // Om det är ett ord, dela upp det i första bokstaven och resten
            const isWord = !isPunctuation && !isSpace;
            const firstLetter = isWord ? segment[0] : '';
            const restOfWord = isWord ? segment.slice(1) : '';
            const userFirstLetter = isWord && userSegment ? userSegment[0] : '';
            const userRestOfWord = isWord && userSegment ? userSegment.slice(1) : '';

            // Kontrollera fel
            let hasFirstLetterError = false;
            let hasRestOfWordError = false;

            if (userSegment !== undefined) {
              if (isSpace || isPunctuation) {
                // För mellanslag och skiljetecken, visa hela segmentet som fel
                hasFirstLetterError = userSegment !== segment;
              } else {
                // För ord, kontrollera första bokstaven och resten separat
                hasFirstLetterError = userFirstLetter !== firstLetter;
                hasRestOfWordError = userRestOfWord.toLowerCase() !== restOfWord.toLowerCase();
              }
            }

            if (isWord) {
              return (
                <span key={index} className="relative">
                  {isCurrent && (
                    <span className="absolute right-full top-0 border-l-2 border-indigo-500 h-full animate-pulse" />
                  )}
                  <span className={hasFirstLetterError ? 'text-red-500 bg-red-50' : userSegment ? 'text-green-600' : 'text-gray-700'}>
                    {firstLetter}
                  </span>
                  <span className={hasRestOfWordError ? 'text-red-500 bg-red-50' : userSegment ? 'text-green-600' : 'text-gray-700'}>
                    {restOfWord}
                  </span>
                </span>
              );
            } else {
              return (
                <span
                  key={index}
                  className={`relative ${
                    hasFirstLetterError ? 'text-red-500 bg-red-50' : 
                    userSegment ? 'text-green-600' : 
                    'text-gray-700'
                  }`}
                >
                  {isCurrent && (
                    <span className="absolute right-full top-0 border-l-2 border-indigo-500 h-full animate-pulse" />
                  )}
                  {segment}
                </span>
              );
            }
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