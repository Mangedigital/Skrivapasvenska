interface FeedbackTip {
  title: string;
  description: string;
  priority: number;
}

export function generateFeedback(wpm: number, accuracy: number, errors: Array<{ type: string; count: number }>): FeedbackTip[] {
  const tips: FeedbackTip[] = [];

  // Speed-based feedback
  if (wpm < 20) {
    tips.push({
      title: 'Öva på grundläggande fingersättning',
      description: 'Försök att använda rätt finger för varje tangent. Detta kommer att öka din skrivhastighet med tiden.',
      priority: 1
    });
  } else if (wpm < 40) {
    tips.push({
      title: 'Fokusera på flyt',
      description: 'Du har bra grundteknik! Försök nu att skriva mer flytande utan att stanna upp mellan orden.',
      priority: 2
    });
  }

  // Accuracy-based feedback
  if (accuracy < 90) {
    tips.push({
      title: 'Sakta ner och var noggrann',
      description: 'Det är bättre att skriva långsammare och korrekt än snabbt med många fel.',
      priority: 1
    });
  }

  // Error-specific feedback
  const errorTypes = new Map(errors.map(e => [e.type, e.count]));
  
  if (errorTypes.get('Stor/liten bokstav')) {
    tips.push({
      title: 'Var uppmärksam på stor och liten bokstav',
      description: 'Kom ihåg att meningar börjar med stor bokstav och namn stavas med stor bokstav.',
      priority: 2
    });
  }

  if (errorTypes.get('Ordform')) {
    tips.push({
      title: 'Öva på bestämd och obestämd form',
      description: 'Var extra uppmärksam på när du ska använda bestämd form (t.ex. "hunden") eller obestämd form (t.ex. "en hund").',
      priority: 1
    });
  }

  return tips.sort((a, b) => a.priority - b.priority);
}