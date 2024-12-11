import React from 'react';
import { Lightbulb, ChevronRight } from 'lucide-react';

interface Tip {
  title: string;
  description: string;
  priority: number;
}

interface PerformanceTipsProps {
  tips: Tip[];
  onClose: () => void;
}

export default function PerformanceTips({ tips, onClose }: PerformanceTipsProps) {
  return (
    <div className="bg-gradient-to-br from-indigo-50 to-white p-6 rounded-lg shadow-sm space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Lightbulb className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-semibold text-gray-800">Tips för förbättring</h3>
        </div>
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 transition-colors"
        >
          Stäng
        </button>
      </div>

      <div className="space-y-4">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm"
          >
            <ChevronRight className="w-5 h-5 text-indigo-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-gray-800">{tip.title}</h4>
              <p className="text-sm text-gray-600 mt-1">{tip.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={onClose}
        className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Börja ny övning
      </button>
    </div>
  );
}