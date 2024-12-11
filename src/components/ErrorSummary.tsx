import React from 'react';
import { AlertCircle, Check, Trophy } from 'lucide-react';

interface Error {
  type: string;
  description: string;
  count: number;
}

interface ErrorSummaryProps {
  errors: Error[];
  accuracy: number;
  wpm: number;
}

export default function ErrorSummary({ errors, accuracy, wpm }: ErrorSummaryProps) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm space-y-6 backdrop-blur-lg bg-opacity-90">
      <div className="flex items-center justify-between border-b pb-6">
        <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
          Ditt resultat
        </h3>
        <div className="flex gap-6">
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Hastighet</p>
            <p className="text-xl font-bold text-indigo-600">{wpm} ord/min</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-1">Rätt</p>
            <p className="text-xl font-bold text-green-600">{accuracy}%</p>
          </div>
        </div>
      </div>

      {errors.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-8">
          <Trophy className="w-16 h-16 text-yellow-500" />
          <div className="text-center">
            <h4 className="text-xl font-bold text-gray-800 mb-2">Perfekt!</h4>
            <p className="text-gray-600">Du skrev allt rätt. Bra jobbat!</p>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {errors.map((error, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-xl bg-gray-50">
              <AlertCircle className="w-6 h-6 text-amber-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-gray-800">{error.type}</p>
                <p className="text-gray-600 mt-1">{error.description}</p>
                <p className="text-sm text-amber-600 mt-2 font-medium">
                  Antal fel: {error.count}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}