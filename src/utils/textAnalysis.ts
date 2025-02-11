interface TextError {
  type: string;
  description: string;
  count: number;
}

export function analyzeText(input: string, target: string): TextError[] {
  const errors: TextError[] = [];

  // Dela upp texten i ord och skiljetecken
  const inputWords = input.split(/(\s+|[.,!?])/);
  const targetWords = target.split(/(\s+|[.,!?])/);

  // Kontrollera mellanslag
  const spaceErrors = inputWords.reduce((count, segment, i) => {
    const targetSegment = targetWords[i];
    if (!targetSegment) return count;
    
    if (segment.match(/\s+/) && targetSegment.match(/\s+/) && segment !== targetSegment) {
      return count + 1;
    }
    return count;
  }, 0);

  if (spaceErrors > 0) {
    errors.push({
      type: 'Mellanslag',
      description: 'Du har för många eller för få mellanslag mellan orden',
      count: spaceErrors,
    });
  }

  // Kontrollera skiljetecken separat
  const punctuationErrors = inputWords.reduce((count, segment, i) => {
    const targetSegment = targetWords[i];
    if (!targetSegment) return count;
    
    if (segment.match(/[.,!?]/) && targetSegment.match(/[.,!?]/) && segment !== targetSegment) {
      return count + 1;
    }
    return count;
  }, 0);

  if (punctuationErrors > 0) {
    errors.push({
      type: 'Skiljetecken',
      description: 'Du har missat eller fel på punkt, komma eller annat skiljetecken',
      count: punctuationErrors,
    });
  }

  // Kontrollera stavning ord för ord (ignorera mellanslag och skiljetecken)
  const words = input.split(/[\s.,!?]+/).filter(Boolean);
  const targetWords2 = target.split(/[\s.,!?]+/).filter(Boolean);
  
  const spellingErrors = words.reduce((errors, word, i) => {
    const targetWord = targetWords2[i];
    if (!targetWord) return errors;

    // Jämför orden utan hänsyn till stor/liten bokstav
    if (word.toLowerCase() !== targetWord.toLowerCase()) {
      return [...errors, { word, targetWord }];
    }
    return errors;
  }, [] as Array<{ word: string; targetWord: string }>);

  if (spellingErrors.length > 0) {
    errors.push({
      type: 'Stavning',
      description: `Stavfel hittades i följande ord: ${spellingErrors.map(e => `"${e.word}" (ska vara "${e.targetWord}")`).join(', ')}`,
      count: spellingErrors.length,
    });
  }

  // Kontrollera stor/liten bokstav separat
  const capitalErrors = words.reduce((count, word, i) => {
    const targetWord = targetWords2[i];
    if (!targetWord) return count;
    
    if (word.charAt(0) !== targetWord.charAt(0) && word.toLowerCase() === targetWord.toLowerCase()) {
      return count + 1;
    }
    return count;
  }, 0);

  if (capitalErrors > 0) {
    errors.push({
      type: 'Stor/liten bokstav',
      description: 'Du har skrivit fel på stor eller liten bokstav i början av ord',
      count: capitalErrors,
    });
  }

  return errors;
}

export function calculateAccuracy(input: string, target: string): number {
  if (!input.length) return 100;
  
  // Dela upp i ord och jämför ord för ord
  const inputWords = input.split(/[\s.,!?]+/).filter(Boolean);
  const targetWords = target.split(/[\s.,!?]+/).filter(Boolean);
  
  const correctWords = inputWords.reduce((count, word, i) => {
    const targetWord = targetWords[i];
    if (!targetWord) return count;
    
    return word === targetWord ? count + 1 : count;
  }, 0);

  // Beräkna noggrannhet baserat på antal korrekta ord
  const totalWords = Math.max(inputWords.length, targetWords.length);
  return Math.round((correctWords / totalWords) * 100);
}