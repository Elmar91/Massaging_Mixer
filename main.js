let sentencePartOne = ["Indem wir weniger Plastik verwenden", "Durch den Verzicht auf Einwegprodukte", "Wenn wir auf erneuerbare Energien umsteigen", 
    "Mit dem Pflanzen von Bäumen", "Durch nachhaltige Landwirtschaft", "Indem wir Recycling fördern", "Durch den Schutz von Wäldern",
    "Wenn wir auf öffentliche Verkehrsmittel umsteigen", "Mit der Reduktion von Fleischkonsum", "Durch die Nutzung von Solarenergie" ]

let sentencePartTwo = ["schützen wir unsere Ozeane.", "reduzieren wir die Müllmenge.", "verringern wir den CO2-Ausstoß.", 
    "verbessern wir die Luftqualität.", "schonen wir die natürlichen Ressourcen.", "reduzieren wir den Abfall auf Deponien.", "bewahren wir die Artenvielfalt.",
    "reduzieren wir den Verkehr.", "senken wir den Wasserverbrauch.", "sparen wir fossile Brennstoffe ein." ]

    // Returns a random part of Array One
    const randomPartOne = arr => {
        return arr[Math.floor(Math.random() * arr.length)]
  
    };

    // Returns a random part of Array Tow
    const randomPartTwo = arr => {
        return arr[Math.floor(Math.random() * arr.length)]
  
    };
    
    
    console.log(randomPartOne(sentencePartOne, sentencePartTwo));