import React from 'react';
import TypingTest from './components/TypingTest';
import { Keyboard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-2 md:py-3 flex items-center gap-2">
          <Keyboard className="w-5 h-5 md:w-6 md:h-6 text-indigo-600" />
          <span className="font-semibold text-gray-800 text-sm md:text-base">Svensk Skrivträning</span>
        </div>
      </nav>
      
      <main className="container mx-auto py-4 md:py-8 px-4">
        <TypingTest />
      </main>
      
      <footer className="mt-8 md:mt-12 py-4 md:py-6 text-center text-gray-600 text-xs md:text-sm">
        <p>Öva din skrivhastighet på svenska</p>
      </footer>
    </div>
  );
}

export default App;