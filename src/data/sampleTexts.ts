interface TextSample {
  text: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const sampleTexts: TextSample[] = [
  // CLEANING (Lokalvård) - EASY LEVEL
  {
    text: "Vi städar kontoret varje dag.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Töm alla papperskorgar först.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Dammsug golvet noga.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Fyll på med nytt papper.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Torka av alla bord.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Byt soppåsen i köket.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Moppa golvet i hallen.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Rengör toaletten noga.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Fyll på med handsprit.",
    difficulty: "easy",
    category: "cleaning"
  },
  {
    text: "Kontrollera städvagnen.",
    difficulty: "easy",
    category: "cleaning"
  },

  // CLEANING (Lokalvård) - MEDIUM LEVEL
  {
    text: "Städvagnen ska alltid vara komplett. Kontrollera innehållet varje morgon.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Vi måste byta sängkläder i alla rum på andra våningen. Glöm inte extrakuddar.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Använd rätt rengöringsmedel för olika ytor. Läs på flaskan innan användning.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Konferensrummet ska vara klart innan lunch. Torka av whiteboarden och ställ i ordning stolarna.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Det ligger ett trasigt glas i personalrummet. Använd sopborsten och var försiktig.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Kontrollera att alla fönster är stängda efter att du har tvättat dem. Använd fönsterputsmedel.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Vi behöver beställa nya städprodukter. Skriv upp vad som saknas på listan.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Toaletterna på bottenvåningen behöver extra tillsyn idag. Fyll på med papper och tvål.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Dammsug och moppa golven i receptionen. Var extra noga under sofforna och stolarna.",
    difficulty: "medium",
    category: "cleaning"
  },
  {
    text: "Rengör mikrovågsugnarna i lunchrummet. Torka både in- och utsidan med våtservett.",
    difficulty: "medium",
    category: "cleaning"
  },

  // CLEANING (Lokalvård) - HARD LEVEL
  {
    text: "När du städar konferensrummet på våning 4, kom ihåg att det är möte klockan 13:00! Torka av borden, dammsug golvet, och se till att det finns rena koppar.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Vi har fått en rapport om mögellukt i källaren. Kontrollera ventilationen och luftfuktigheten. Dokumentera alla fynd och rapportera till arbetsledaren.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Hotellets svit 514 ska iordningställas för VIP-gäster som anländer ikväll. Kontrollera extra noga att allt är perfekt, från badrummet till garderoberna.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Efter vattenläckan i biblioteket måste vi torka av alla böcker i den drabbade hyllan. Använd mikrofiberdukar och var extra försiktig med de äldre böckerna.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Inför helgens konferens behöver vi förbereda alla mötesrum. Kontrollera teknisk utrustning, rengör projektorerna, och se till att det finns pennor vid alla platser.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Det har kommit in klagomål på städningen i omklädningsrummen. Gör en grundlig rengöring av duscharna, byt ut trasiga duschdraperi, och desinficera alla ytor.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Restaurangen behöver en akut städning efter ett stort sällskap. Dammsug mattor, torka av alla ytor, och se till att det är presentabelt innan nästa bokning klockan 19:00.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "På grund av influensautbrott måste vi desinficera alla gemensamma utrymmen extra noga. Använd rätt skyddsutrustning och följ hygienrutinerna.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Inför morgondagens inspektion behöver vi säkerställa att alla städrutiner är dokumenterade. Gå igenom checklistorna och uppdatera städloggarna för varje avdelning.",
    difficulty: "hard",
    category: "cleaning"
  },
  {
    text: "Vi har fått en akut beställning på fönsterputs i hela kontorsbyggnaden. Planera arbetet effektivt, börja högst upp, och se till att alla säkerhetsrutiner följs.",
    difficulty: "hard",
    category: "cleaning"
  },

  // GARDENING (Park/trädgård) - EASY LEVEL
  {
    text: "Vi planterar blommor idag.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Klipp gräset noga.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Vattna alla växter.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Rensa ogräs i rabatterna.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Kratta löven på gången.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Töm komposten idag.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Sopa rent på terrassen.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Rensa grusgångarna.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Beskär buskarna försiktigt.",
    difficulty: "easy",
    category: "gardening"
  },
  {
    text: "Samla ihop alla grenar.",
    difficulty: "easy",
    category: "gardening"
  },

  // GARDENING (Park/trädgård) - MEDIUM LEVEL
  {
    text: "Under sommaren klipper vi gräset ofta. Parkbänkarna behöver också underhåll.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Kontrollera bevattningssystemet i växthuset. Byt ut trasiga munstycken.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Vi behöver plantera nya sommarblommor i rabatterna. Använd rätt planteringsavstånd.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Rensa ogräs mellan stenplattorna på torget. Var försiktig med fogarna.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Klipp häcken runt lekplatsen. Se till att höjden blir jämn.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Kontrollera alla parkbänkar efter skador. Rapportera vad som behöver lagas.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Rensa dagvattenbrunnar från löv och skräp. Använd rätt verktyg.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Beskär fruktträden i parken. Ta bort döda och skadade grenar.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Sprid ut ny bark i rabatterna. Täck jorden ordentligt runt växterna.",
    difficulty: "medium",
    category: "gardening"
  },
  {
    text: "Sätt upp nya fågelholkar i parken. Placera dem på lämplig höjd.",
    difficulty: "medium",
    category: "gardening"
  },

  // GARDENING (Park/trädgård) - HARD LEVEL
  {
    text: "Vi ska beskära alla buskar i parken innan vintern. Kom ihåg att använda rätt verktyg och följ säkerhetsrutinerna. Börja med de största buskarna.",
    difficulty: "hard",
    category: "gardening"
  },
  {
    text: "Inför stadsfestivalen behöver vi förbereda hela stadsparken. Kontrollera belysningen, rensa alla rabatter och se till att gräsmattorna är nyklippta.",
    difficulty: "hard",
    category: "gardening"
  },
  {
    text: "Efter stormen måste vi inspektera alla stora träd i parken. Leta efter skadade grenar och dokumentera eventuella riskträd som behöver åtgärdas.",
    difficulty: "hard",
    category: "gardening"
  },
  {
    text: "Vi har upptäckt skadedjur på rosorna i stadsparken. Undersök omfattningen och planera lämpliga åtgärder. Dokumentera alla fynd för parkförvaltningen.",
    difficulty: "hard",
    category: "gardening"
  },
  {
    text: "Lekplatsen ska renoveras nästa vecka. Märk ut området som ska grävas upp, flytta växter som kan återanvändas och dokumentera placeringen av vattenledningar.",
    difficulty: "hard",
    category: "gardening"
  },
  {
    text: "Det automatiska bevattningssystemet fungerar inte som det ska. Kontrollera alla sektioner, programmera om timern och justera spridarna för bättre täckning.",
    difficulty: "hard",
    category: "gardening"
  },
  {
    text: "Vi behöver planera höstplanteringen för hela området. Gör en lista över växter som behövs, beräkna mängden jord och planera arbetet enligt tidsplanen.",
    difficulty: "hard",
    category: "gardening"
  },
  {
    text: "Fotbollsplanen måste förberedas inför säsongen. Kontrollera dräneringen, laga skador i gräsmattan och märk upp nya linjer enligt reglerna.",
    difficulty: "hard",
    category: "gardening"
  },
  {
    text: "Växthuset behöver en grundlig genomgång. Kontrollera temperaturregleringen, rengör ventilationen och kalibrera luftfuktighetsmätarna.",
    difficulty: "hard",
    category: "gardening"
  },
  {
    text: "Inför vintern måste alla känsliga växter skyddas. Täck rabatterna med granris, bind upp prydnadsgräs och isolera krukväxterna enligt instruktionerna.",
    difficulty: "hard",
    category: "gardening"
  },

  // CHILDCARE (Barnomsorg) - EASY LEVEL
  {
    text: "Barnen leker ute idag.",
    difficulty: "easy",
    category: "childcare"
  },
  {
    text: "Vi läser saga efter lunch.",
    difficulty: "easy",
    category: "childcare"
  },
  {
    text: "Dags för mellanmål nu.",
    difficulty: "easy",
    category: "childcare"
  },
  {
    text: "Tvätta händerna före maten.",
    difficulty: "easy",
    category: "childcare"
  },
  {
    text: "Alla barn ska vila.",
    difficulty: "easy",
    category: "childcare"
  },
  {
    text: "Samling på blå mattan.",
    difficulty: "easy",
    category: "childcare"
  },
  {
    text: "Ta på dig ytterkläderna.",
    difficulty: "easy",
    category: "childcare"
  },
  {
    text: "Städa undan leksakerna.",
    difficulty: "easy",
    category: "childcare"
  },
  {
    text: "Dags att gå in nu.",
    difficulty: "easy",
    category: "childcare"
  },
  {
    text: "Rita en fin teckning.",
    difficulty: "easy",
    category: "childcare"
  },

  // CHILDCARE (Barnomsorg) - MEDIUM LEVEL
  {
    text: "Vi har samling klockan nio varje morgon. Alla barn ska vara med på sångstunden.",
    difficulty: "medium",
    category: "childcare"
  },
  {
    text: "Kontrollera att alla barn har ätit sin lunch. Dokumentera i listan.",
    difficulty: "medium",
    category: "childcare"
  },
  {
    text: "Efter vilan ska barnen få frukt. Skär upp äpplen och bananer i lagom stora bitar.",
    difficulty: "medium",
    category: "childcare"
  },
  {
    text: "Vi går till lekparken idag. Räkna barnen före och efter promenaden.",
    difficulty: "medium",
    category: "childcare"
  },
  {
    text: "Prata med föräldrarna om barnens dag vid hämtning. Berätta om dagens aktiviteter.",
    difficulty: "medium",
    category: "childcare"
  },
  {
    text: "Hjälp barnen att tvätta händerna ordentligt. Använd tvål och torka noga.",
    difficulty: "medium",
    category: "childcare"
  },
  {
    text: "Förbered material för pysselstunden. Vi ska måla med vattenfärger idag.",
    difficulty: "medium",
    category: "childcare"
  },
  {
    text: "Byt blöjor på de minsta barnen. Dokumentera i blöjlistan.",
    difficulty: "medium",
    category: "childcare"
  },
  {
    text: "Städa och torka av matbordet efter lunchen. Sopa under borden.",
    difficulty: "medium",
    category: "childcare"
  },
  {
    text: "Hjälp barnen med påklädningen. Se till att alla har vantar och mössa.",
    difficulty: "medium",
    category: "childcare"
  },

  // CHILDCARE (Barnomsorg) - HARD LEVEL
  {
    text: "Eftersom vi har 25 barn på avdelningen idag, behöver vi vara extra uppmärksamma på säkerheten! Kontrollera att alla grindar är stängda när vi går ut.",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "Ett barn har fallit och slagit sig på gården. Ge första hjälpen, dokumentera händelsen i tillbudsrapporten och informera föräldrarna vid hämtning.",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "Vi har upptäckt att flera barn har löss. Informera alla föräldrar om situationen, dela ut informationsblad och följ hygienrutinerna extra noga.",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "Inför utvecklingssamtalen nästa vecka behöver vi uppdatera alla barnens portfolios. Sammanställ dokumentation och observationer från terminen.",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "Vi har fått ett nytt barn med glutenallergi på avdelningen. Kontrollera alla måltider noga och informera vikarien om rutinerna kring specialkosten.",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "Planera veckans temaarbete om rymden. Förbered material, skriv veckobrev till föräldrarna och gör en inköpslista för aktiviteterna.",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "Ett barn visar tecken på oro och utanförskap i barngruppen. Observera samspelet med andra barn, dokumentera beteendet och planera stödjande åtgärder.",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "Inför sommaravslutningen ska vi öva på sångerna med barnen. Kopiera sångtexterna, förbered rörelserna och planera generalrepetitionen.",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "Vi har märkt att det saknas namn på flera barns extrakläder. Gå igenom alla hyllor, märk kläderna och meddela föräldrarna vad som behöver kompletteras.",
    difficulty: "hard",
    category: "childcare"
  },
  {
    text: "En förälder har uttryckt oro över sitt barns språkutveckling. Genomför språkobservation, dokumentera resultatet och boka möte med specialpedagogen.",
    difficulty: "hard",
    category: "childcare"
  },

  // HEALTHCARE (Vård och omsorg) - EASY LEVEL
  {
    text: "Dags för morgonmedicin.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Vi byter lakan idag.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Dags för frukost nu.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Tvätta händerna noga.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Hjälp med duschning.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Kontrollera blodtrycket.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Byt inkontinensskydd.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Servera lunchen.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Städa i köket.",
    difficulty: "easy",
    category: "healthcare"
  },
  {
    text: "Följ med på promenad.",
    difficulty: "easy",
    category: "healthcare"
  },

  // HEALTHCARE (Vård och omsorg) - MEDIUM LEVEL
  {
    text: "Kontrollera alla vitala parametrar före lunch. Dokumentera i journalen.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Vi behöver vända patienten varannan timme. Använd vändschema.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Hjälp Karin med morgonrutinen. Hon behöver stöd med påklädning och hygien.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Gör i ordning dosetten för nästa vecka. Dubbelkolla mot medicinlistan.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Byt såromläggning på höger ben. Dokumentera sårets utseende.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Förbered materialet till provtagningen. Vi behöver rör och etiketter.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Hjälp till vid måltiden. Vissa behöver extra stöd med matning.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Rapportera till kvällspersonalen om dagens händelser och förändringar.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Kontrollera alla larm och trygghetskameror. Se till att de fungerar.",
    difficulty: "medium",
    category: "healthcare"
  },
  {
    text: "Beställ nya förbrukningsartiklar. Gör en lista på vad som saknas.",
    difficulty: "medium",
    category: "healthcare"
  },

  // HEALTHCARE (Vård och omsorg) - HARD LEVEL
  {
    text: "En boende har fallit i duschen och slagit huvudet. Gör en första bedömning, kontakta sjuksköterskan och dokumentera händelsen i avvikelsesystemet.",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "Vi har fått en ny patient med diabetes och hjärtsvikt. Läs igenom vårdplanen noggrant och säkerställ att alla kontroller genomförs enligt schema.",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "Efter läkemedelsgenomgången behöver vi uppdatera alla signeringslistor. Kontrollera ordinationerna och informera alla berörda om förändringarna.",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "En boende visar tecken på försämrat allmäntillstånd. Gör en bedömning enligt SBAR, mät vitala parametrar och rapportera till ansvarig sjuksköterska.",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "Inför helgen behöver vi planera bemanning och delegering av arbetsuppgifter. Säkerställ att alla har rätt kompetens för sina uppgifter.",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "Vi har upptäckt flera trycksår på avdelningen. Implementera förebyggande åtgärder, dokumentera riskbedömningar och planera uppföljning.",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "En anhörig har uttryckt oro över sin förälders omvårdnad. Boka ett möte, förbered dokumentation och gå igenom genomförandeplanen tillsammans.",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "Det har kommit nya hygienrutiner från vårdhygien. Gå igenom materialet med personalen och säkerställ att alla förstår de nya riktlinjerna.",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "En patient med demens visar aggressivt beteende. Dokumentera situationen, planera bemötandestrategier och informera nattpersonalen om förändringen.",
    difficulty: "hard",
    category: "healthcare"
  },
  {
    text: "Vi behöver uppdatera alla genomförandeplaner innan månadsslut. Involvera de boende i planeringen och stäm av med kontaktpersonerna.",
    difficulty: "hard",
    category: "healthcare"
  },

  // RETAIL (Butik och service) - EASY LEVEL
  {
    text: "Välkommen till butiken.",
    difficulty: "easy",
    category: "retail"
  },
  {
    text: "Kan jag hjälpa dig?",
    difficulty: "easy",
    category: "retail"
  },
  {
    text: "Varan finns på hyllan.",
    difficulty: "easy",
    category: "retail"
  },
  {
    text: "Öppna en ny kassa.",
    difficulty: "easy",
    category: "retail"
  },
  {
    text: "Fyll på med varor.",
    difficulty: "easy",
    category: "retail"
  },
  {
    text: "Städa vid kassan.",
    difficulty: "easy",
    category: "retail"
  },
  {
    text: "Kolla bäst före datum.",
    difficulty: "easy",
    category: "retail"
  },
  {
    text: "Stäng kassan nu.",
    difficulty: "easy",
    category: "retail"
  },
  {
    text: "Räkna dagens kassa.",
    difficulty: "easy",
    category: "retail"
  },
  {
    text: "Plocka upp i hyllorna.",
    difficulty: "easy",
    category: "retail"
  },

  // RETAIL (Butik och service) - MEDIUM LEVEL
  {
    text: "Vi behöver fylla på med frukt och grönt. Kontrollera kvaliteten noga.",
    difficulty: "medium",
    category: "retail"
  },
  {
    text: "Hjälp kunden att hitta glutenfria produkter. De finns i specialkostavdelningen.",
    difficulty: "medium",
    category: "retail"
  },
  {
    text: "Gör en inventering av mejeriprodukter. Skriv upp vad som behöver beställas.",
    difficulty: "medium",
    category: "retail"
  },
  {
    text: "En kund vill reklamera en vara. Ta emot kvittot och dokumentera felet.",
    difficulty: "medium",
    category: "retail"
  },
  {
    text: "Kontrollera temperaturerna i kyldiskarna. Anteckna värdena i loggboken.",
    difficulty: "medium",
    category: "retail"
  },
  {
    text: "Packa upp nya leveransen av konserver. Placera äldst datum främst.",
    difficulty: "medium",
    category: "retail"
  },
  {
    text: "Gör i ordning beställningen för avhämtning. Lägg varorna i kylen.",
    difficulty: "medium",
    category: "retail"
  },
  {
    text: "Sätt upp nya kampanjskyltar i butiken. Kontrollera att priserna stämmer.",
    difficulty: "medium",
    category: "retail"
  },
  {
    text: "Hjälp den äldre damen med självscanning. Visa hur systemet fungerar.",
    difficulty: "medium",
    category: "retail"
  },
  {
    text: "Sortera pantflaskor och burkar. Töm automaten när den är full.",
    difficulty: "medium",
    category: "retail"
  },

  // RETAIL (Butik och service) - HARD LEVEL
  {
    text: "Vi har fått flera klagomål på felaktiga priser i butiken. Gå igenom alla hyllkantsetiketter och jämför med systemet. Rapportera avvikelser till butikschefen.",
    difficulty: "hard",
    category: "retail"
  },
  {
    text: "En kund har hittat möglig mat i butiken. Gå igenom hela färskvaruavdelningen, dokumentera alla datum och släng produkter som närmar sig utgångsdatum.",
    difficulty: "hard",
    category: "retail"
  },
  {
    text: "Inför julhelgen behöver vi planera bemanningen i kassorna. Gör ett schema som täcker de extra öppettiderna och säkerställ att alla kassor är bemannade.",
    difficulty: "hard",
    category: "retail"
  },
  {
    text: "Kyldisken med mejerivaror har gått sönder under natten. Kontrollera alla produkter, dokumentera svinnet och beställ nya varor från leverantören.",
    difficulty: "hard",
    category: "retail"
  },
  {
    text: "En kund har halkat på ett vätskeläckage i gång tre. Spärra av området, kontakta städpersonalen och dokumentera händelsen i avvikelserapporten.",
    difficulty: "hard",
    category: "retail"
  },
  {
    text: "Vi har upptäckt att larmbågarna vid entrén inte fungerar korrekt. Kontakta säkerhetsföretaget, öka bevakningen och informera all personal om situationen.",
    difficulty: "hard",
    category: "retail"
  },
  {
    text: "Inför inventering nästa vecka behöver vi förbereda alla avdelningar. Gå igenom rutinerna med personalen och se till att alla förstår sina uppgifter.",
    difficulty: "hard",
    category: "retail"
  },
  {
    text: "En kund har upptäckt att hennes kreditkort debiterats två gånger för samma köp. Granska transaktionsloggen, kontakta banken och hjälp kunden med återbetalning.",
    difficulty: "hard",
    category: "retail"
  },
  {
    text: "Vi har fått en stor leverans med fel varor från grossisten. Dokumentera felen, organisera returen och beställ rätt produkter med expres ssleverans.",
    difficulty: "hard",
    category: "retail"
  },
  {
    text: "Det har kommit nya rutiner för hantering av färskvaror från huvudkontoret. Uppdatera alla checklistor, utbilda personalen och implementera förändringarna.",
    difficulty: "hard",
    category: "retail"
  }
];