interface TextError {
  type: string;
  description: string;
  count: number;
}

export function analyzeText(input: string, target: string): TextError[] {
  const errors: TextError[] = [];

  // Kontrollera stor/liten bokstav ord för ord
  const inputWords = input.split(' ');
  const targetWords = target.split(' ');
  
  const capitalErrors = inputWords.reduce((count, word, i) => {
    const targetWord = targetWords[i];
    if (!targetWord) return count;
    
    // Kontrollera bara första bokstaven i varje ord
    if (word.charAt(0) !== targetWord.charAt(0)) {
      return count + 1;
    }
    return count;
  }, 0);

  if (capitalErrors > 0) {
    errors.push({
      type: 'Stor eller liten bokstav',
      description: 'Du har skrivit fel på stor eller liten bokstav i början av ord',
      count: capitalErrors,
    });
  }

  // Kontrollera punkt och komma
  const punctuationErrors = input.split('').reduce((count, char, i) => {
    if ((target[i] === '.' && char !== '.') || 
        (target[i] === ',' && char !== ',') ||
        (char === '.' && target[i] !== '.') ||
        (char === ',' && target[i] !== ',')) {
      return count + 1;
    }
    return count;
  }, 0);

  if (punctuationErrors > 0) {
    errors.push({
      type: 'Skiljetecken',
      description: 'Du har missat eller fel på punkt eller komma',
      count: punctuationErrors,
    });
  }

  // Kontrollera stavning (ord för ord)
  const spellingErrors = inputWords.reduce((count, word, i) => {
    const targetWord = targetWords[i];
    if (!targetWord) return count;

    // Ta bort skiljetecken och gör om till små bokstäver för stavningskontroll
    const cleanWord = word.toLowerCase().replace(/[.,!?]$/, '');
    const cleanTargetWord = targetWord.toLowerCase().replace(/[.,!?]$/, '');
    
    if (cleanWord !== cleanTargetWord) {
      return count + 1;
    }
    return count;
  }, 0);

  if (spellingErrors > 0) {
    errors.push({
      type: 'Stavning',
      description: 'Du har stavat fel på några ord',
      count: spellingErrors,
    });
  }

  return errors;
}

export function calculateAccuracy(input: string, target: string): number {
  if (!input.length) return 100;
  
  const correctChars = input
    .split('')
    .filter((char, index) => char === target[index])
    .length;

  return Math.round((correctChars / Math.max(input.length, 1)) * 100);
}