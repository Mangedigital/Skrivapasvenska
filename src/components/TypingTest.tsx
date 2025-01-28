import React, { useState, useEffect, useCallback } from 'react';
import { RefreshCcw, CheckCircle, Keyboard } from 'lucide-react';
import TextDisplay from './TextDisplay';
import ErrorSummary from './ErrorSummary';
import { analyzeText, calculateAccuracy } from '../utils/textAnalysis';
import { sampleTexts } from '../data/sampleTexts';

export default function TypingTest() {
  const [currentText, setCurrentText] = useState('');
  const [targetText, setTargetText] = useState('');
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [isCompleted, setIsCompleted] = useState(false);
  const [showAnalysis, setShowAnalysis] = useState(false);
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [errors, setErrors] = useState<Array<{ type: string; description: string; count: number }>>([]);

  const getNewText = useCallback(() => {
    const textsForDifficulty = sampleTexts.filter(t => t.difficulty === difficulty);
    const randomIndex = Math.floor(Math.random() * textsForDifficulty.length);
    return textsForDifficulty[randomIndex].text;
  }, [difficulty]);

  const resetTest = useCallback(() => {
    setCurrentText('');
    setTargetText(getNewText());
    setStartTime(null);
    setWpm(0);
    setAccuracy(100);
    setIsCompleted(false);
    setShowAnalysis(false);
    setErrors([]);
  }, [getNewText]);

  useEffect(() => {
    resetTest();
  }, [resetTest, difficulty]);

  const calculateStats = useCallback(() => {
    if (!startTime) return;
    const timeElapsed = (Date.now() - startTime) / 1000 / 60;
    const wordsTyped = currentText.trim().split(/\s+/).length;
    const newWpm = Math.round(wordsTyped / timeElapsed);
    const newAccuracy = calculateAccuracy(currentText, targetText);
    setWpm(newWpm);
    setAccuracy(newAccuracy);
  }, [currentText, startTime, targetText]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    if (!startTime && newText.length === 1) {
      setStartTime(Date.now());
    }
    setCurrentText(newText);
    calculateStats();
    setIsCompleted(newText.trim().endsWith('.'));
  };

  const handleAnalyze = () => {
    const textErrors = analyzeText(currentText, targetText);
    setErrors(textErrors);
    setShowAnalysis(true);
  };

  const difficultyOptions = [
    { id: 'easy', label: 'Lätt', bgColor: 'bg-green-500/30', selectedBg: 'bg-green-100', textColor: 'text-green-800' },
    { id: 'medium', label: 'Medel', bgColor: 'bg-yellow-500/30', selectedBg: 'bg-yellow-100', textColor: 'text-yellow-800' },
    { id: 'hard', label: 'Svår', bgColor: 'bg-red-500/30', selectedBg: 'bg-red-100', textColor: 'text-red-800' }
  ];

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6 space-y-6 md:space-y-8">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <div className="flex items-center gap-3">
          <Keyboard className="w-6 h-6 md:w-8 md:h-8 text-indigo-600" />
          <h1 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
            Skriv På Svenska
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
          <div className="flex gap-2 bg-white/60 backdrop-blur-sm p-1 rounded-xl shadow-sm">
            {difficultyOptions.map(({ id, label, bgColor, selectedBg, textColor }) => (
              <button
                key={id}
                onClick={() => setDifficulty(id as 'easy' | 'medium' | 'hard')}
                className={`
                  flex-1 md:flex-none px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
                  ${difficulty === id ? `${selectedBg} ${textColor} shadow-sm` : `${bgColor} hover:bg-opacity-40`}
                `}
              >
                {label}
              </button>
            ))}
          </div>
          <button
            onClick={resetTest}
            className="flex items-center justify-center gap-2 px-4 py-2 bg-white/90 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors duration-200 shadow-sm"
          >
            <RefreshCcw className="w-4 h-4" />
            Ny Text
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/90 px-4 py-3 rounded-xl shadow-sm backdrop-blur-sm">
          <p className="text-gray-600 text-sm">Ord per minut</p>
          <p className="text-xl md:text-2xl font-bold text-indigo-600">{wpm}</p>
        </div>
        <div className="bg-white/90 px-4 py-3 rounded-xl shadow-sm backdrop-blur-sm">
          <p className="text-gray-600 text-sm">Rätt</p>
          <p className="text-xl md:text-2xl font-bold text-green-600">{accuracy}%</p>
        </div>
      </div>

      <TextDisplay targetText={targetText} currentText={currentText} />

      <div className="space-y-4">
        <textarea
          value={currentText}
          onChange={handleInput}
          disabled={showAnalysis}
          className="w-full p-4 md:p-6 rounded-2xl border-2 border-gray-100 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all duration-200 min-h-[120px] text-base md:text-lg disabled:bg-gray-50 shadow-sm"
          placeholder="Börja skriva här..."
        />

        <button
          onClick={handleAnalyze}
          disabled={!isCompleted}
          className={`w-full flex items-center justify-center gap-2 px-4 py-3 md:py-4 rounded-xl transition-all duration-200 ${
            !isCompleted
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg transform hover:-translate-y-0.5'
          }`}
        >
          <CheckCircle className="w-5 h-5" />
          Visa Resultat
        </button>
      </div>

      {showAnalysis && (
        <ErrorSummary errors={errors} accuracy={accuracy} wpm={wpm} />
      )}
    </div>
  );
}