interface TextSample {
  text: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const sampleTexts: TextSample[] = [
  // EASY LEVEL
  {
    text: "Jag jobbar på sjukhuset.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Vi städar kontoret varje dag.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Köket öppnar klockan sex.",
    difficulty: "easy",
    category: "restaurant"
  },
  {
    text: "Vi planterar blommor idag.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Patienten behöver hjälp.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Jag torkar golvet nu.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Maten är klar nu.",
    difficulty: "easy",
    category: "restaurant"
  },
  {
    text: "Vi klipper gräset idag.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Min chef är snäll.",
    difficulty: "easy",
    category: "work"
  },
  {
    text: "Jag söker ett nytt jobb.",
    difficulty: "easy",
    category: "job-search"
  },
  {
    text: "Vi har rast klockan tolv.",
    difficulty: "easy",
    category: "work"
  },
  {
    text: "Jag tvättar händerna ofta.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Diskmaskinen är full.",
    difficulty: "easy",
    category: "restaurant"
  },
  {
    text: "Vi rensar ogräs idag.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Jag byter lakan nu.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Soppåsen är full.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Vi lagar lunch nu.",
    difficulty: "easy",
    category: "restaurant"
  },
  {
    text: "Jag vattnar växterna.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Vi möter nya patienter.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Jag diskar tallrikarna.",
    difficulty: "easy",
    category: "restaurant"
  },

  // MEDIUM LEVEL
  {
    text: "På vårdavdelningen arbetar vi i team. Vi hjälper varandra med tunga lyft.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Städvagnen ska alltid vara komplett. Kontrollera innehållet varje morgon.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "I restaurangköket är hygienen viktig. Vi använder alltid rena redskap.",
    difficulty: "medium",
    category: "restaurant"
  },
  {
    text: "Under sommaren klipper vi gräset ofta. Parkbänkarna behöver också underhåll.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Varje morgon har vi rapport om patienterna. Alla ska vara uppdaterade.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Vi använder olika moppar för olika golv. Det finns särskilda instruktioner.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Kökschefen planerar veckans meny. Alla måste följa recepten noga.",
    difficulty: "medium",
    category: "restaurant"
  },
  {
    text: "På våren planterar vi nya blommor. Rabatterna ska vara färgglada.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Undersköterskan delar medicin två gånger om dagen. Det är ett viktigt ansvar.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Efter städningen kontrollerar vi alltid resultatet. Kvalitet är viktigt.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Lunchtid är alltid hektisk i köket. Alla måste samarbeta bra.",
    difficulty: "medium",
    category: "restaurant"
  },
  {
    text: "Vi beskär buskar och träd på hösten. Det är ett noggrant arbete.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Personalen byter om i omklädningsrummet. Arbetskläderna ska vara rena.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Fönsterputs ingår i veckostädningen. Vi använder särskild utrustning.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Kocken förbereder mise en place på morgonen. Alla ingredienser ska vara klara.",
    difficulty: "medium",
    category: "restaurant"
  },
  {
    text: "Vi använder miljövänliga gödselmedel. Växterna behöver näring för att växa.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Vårdpersonalen har möte varje måndag. Vi diskuterar veckans schema.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Städschemat uppdateras varje vecka. Alla områden ska täckas in.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Restaurangen öppnar klockan elva. Förberedelserna börjar tidigt.",
    difficulty: "medium",
    category: "restaurant"
  },
  {
    text: "Parkarbetarna börjar tidigt på morgonen. Vi sköter om stadens grönytor.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Nu är det dags för lunch! Ta på dig förklädet och tvätta händerna.",
    difficulty: "medium",
    category: "restaurant"
  },
  {
    text: "Kom ihåg att dokumentera allt! Patientens säkerhet är viktigast.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Städvagnen är påfylld och klar! Kontrollera städmedlen, dukarna och mopparna.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Har du kontrollerat alla patienternas värden? Det är viktigt att dokumentera allt.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Är alla ytor avtorkade och desinficerade? Dubbelkolla gärna en extra gång.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Har ni fyllt på alla ingredienser inför lunchen? Kolla särskilt kylskåpet.",
    difficulty: "medium",
    category: "restaurant"
  },
  {
    text: "Behöver växterna vattnas idag? Kontrollera jorden med fingret.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Ska vi gå igenom rutinerna en gång till? Det är viktigt att alla förstår.",
    difficulty: "medium",
    category: "work"
  },

  // HARD LEVEL
  {
    text: "Eftersom vi har 25 barn på avdelningen idag, behöver vi vara extra uppmärksamma på säkerheten! Har alla barn ätit sin lunch, och finns det någon som behöver extra stöd?",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "På måndag börjar 3 nya barn, därför behöver vi förbereda deras platser i hallen. Kan du kontrollera att det finns namnlappar, och att alla hyllor är rena?",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "När du städar konferensrummet på våning 4, kom ihåg att det är möte klockan 13:00! Torka av borden, dammsug golvet, och se till att det finns 12 rena kaffekoppar.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "I morgon ska vi servera lunch till 150 personer, så vi behöver förbereda redan idag! Har du kontrollerat att det finns tillräckligt med grönsaker i kylrummet?",
    difficulty: "hard",
    category: "restaurant"
  },
  {
    text: "På lagret har vi fått in 45 nya kartonger som ska sorteras före klockan 15:00. Kan du packa upp varorna, och placera dem på hyllorna enligt nummerordning?",
    difficulty: "hard",
    category: "warehouse"
  },
  {
    text: "Jag söker arbete som lokalvårdare och har 5 års erfarenhet av kontorsstädning. Vilka arbetstider gäller för tjänsten, och när kan jag börja om jag får jobbet?",
    difficulty: "hard",
    category: "job-search"
  },
  {
    text: "Vi ska städa hela skolan under sportlovet, vecka 8. Kan du ansvara för idrottshallen och de 6 omklädningsrummen? Glöm inte att beställa extra städmaterial!",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Imorgon kommer 8 personer på arbetsintervju mellan klockan 9:00 och 16:00. Har du förberett mötesrummet, och skrivit ut alla CV:n som vi fick igår?",
    difficulty: "hard",
    category: "job-search"
  },
  {
    text: "På avdelningen har vi 2 nya brukare som flyttar in på torsdag. Kan du visa dem runt, och gå igenom dagsrutinerna? Se till att de får sina scheman!",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "Eftersom det är 28 grader varmt ute idag, måste vi vara extra noga med maten! Kontrollera kylskåpets temperatur var 3:e timme, och dokumentera värdena.",
    difficulty: "hard",
    category: "restaurant"
  },
  {
    text: "Vi behöver beställa nya arbetskläder till de 15 anställda som börjar nästa månad. Kan du mäta upp storlekarna, och skicka beställningen senast på fredag?",
    difficulty: "hard",
    category: "work"
  },
  {
    text: "Efter lunchen ska vi ha aktiviteter med barnen i 4 olika grupper. Har du förberett materialet, och kan du ansvara för sångstunden med 6 barn?",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "På tisdag ska vi göra rent alla 24 fönster i kontorsbyggnaden. Är höghöjdsliften bokad, och har du kontrollerat att all säkerhetsutrustning finns?",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Vi har fått in 200 nya kartonger som ska märkas och sorteras före klockan 14:00! Kan du börja med pallarna längst bak, och arbeta dig framåt?",
    difficulty: "hard",
    category: "warehouse"
  },
  {
    text: "Nästa vecka ska 5 praktikanter börja hos oss i köket. Har du skrivit ut arbetsscheman, och förberett genomgången av hygienrutinerna?",
    difficulty: "hard",
    category: "restaurant"
  },
  {
    text: "Idag har vi 18 barn i gruppen, och 3 är allergiska mot nötter! Har du informerat vikarien om detta, och sett till att alla får rätt mat?",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "Vi behöver inventera förrådet på avdelning 3 innan lunch. Kan du räkna alla förbrukningsvaror, och beställa det som fattas? Glöm inte handskar!",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "På fredag kommer arbetsmiljöinspektionen klockan 10:00! Har du uppdaterat alla städprotokoll, och kan du visa dem runt i lokalerna?",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Det kommer 35 gäster till lunchbuffén, och 7 har specialkost. Har du märkt upp alla rätter tydligt, och finns ingredienslistorna framme?",
    difficulty: "hard",
    category: "restaurant"
  },
  {
    text: "Vi ska möblera om på avdelningen efter klockan 15:00. Kan du hjälpa till att flytta 8 sängar och 12 sängbord? Tänk på att lyfta rätt!",
    difficulty: "hard",
    category: "healthcare"
  }
];