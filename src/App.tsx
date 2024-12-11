import React from 'react';
import TypingTest from './components/TypingTest';
import { Keyboard } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-2">
          <Keyboard className="w-6 h-6 text-indigo-600" />
          <span className="font-semibold text-gray-800">Svensk Skrivträning</span>
        </div>
      </nav>
      
      <main className="container mx-auto py-8 px-4">
        <TypingTest />
      </main>
      
      <footer className="mt-12 py-6 text-center text-gray-600 text-sm">
        <p>Öva din skrivhastighet på svenska</p>
      </footer>
    </div>
  );
}

export default App;