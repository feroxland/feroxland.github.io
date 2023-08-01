const suggestedContent = [
  { title: "The Stranger Fans Of Fulminants", description: "El chico sin poderes Arthur Yamakawa en su camino de ser un héroe", image: "imagen-1.png" },
  { title: "The Extraordinary Hopper-Man", description: "La adaptación Feroxiana de tu vecino amigable", image: "imagen-2.png" },
  { title: "GC'S Epic Journey", description: "Una aventura muy extraña ahora en Ferox Jump", image: "imagen-3.png" },
  { title: "Unbreakable Union", description: "Dos hermanos tratando de expiar sus pecados", image: "imagen-4.png" },
  { title: "The Reborn Of The Blood", description: "El camino de Bogie Kast para salvar su ciudad", image: "imagen-5.png" },
  { title: "The Earth Theme", description: "¿Qué pasaría si África tuviera las mismas guerras que Europa?", image: "imagen-6.png" },
  { title: "Trompis And Friends", description: "¡El lugar donde la diversión y la fantasía vienen a la vida, muy pronto, no se lo pierdan!", image: "imagen-7.png" },
  { title: "Thiefhunter", description: "El defensor de Big Sin City", image: "imagen-9.png" },
  { title: "High Dunk", description: "El genio del Basket, Hanamichi Sakuragi", image: "imagen-8.png" },
  { title: "Psychological Island", description: "El caos de los muertos vivientes", image: "imagen-11.png" },
  { title: "Nightman", description: "La franquicia del murciélago adaptada a Ferox", image: "imagen-12.png" },
  { title: "Death Battle en Ferox", description: "¿¡QUIEN GANARÍA ENTRE TUS PERSONAJES FAVORITOS!?", image: "imagen-db.jpg" },
  { title: "Quest Of Boost", description: "Masakazu Luis buscando las 10 gemas para cumplir su más profundo deseo", image: "imagen-13.png" },
  { title: "Speedster Forever", description: "El velocista de Sunmile contra todo el mundo", image: "imagen-14.png" },
  { title: "Living In The Universe", description: "La vida de Roux O'Hara", image: "imagen-15.png" },
  { title: "The Fulminants", description: "Los héroes más poderosos de Ferox", image: "imagen-16.png" },
  { title: "Marselo", description: "¡El héroe más raro de Ferox!", image: "imagen-17.png" },
  { title: "Dr.Fate", description: "El gran defensor del destino", image: "imagen-18.png" },
];


function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function showTodaySuggestions() {
  const suggestedCards = document.getElementById("suggested-cards");
  suggestedCards.innerHTML = ""; 

  for (let i = 0; i < 3; i++) { 
    const suggestion = getRandomItem(suggestedContent);
    const card = document.createElement("div");
    card.classList.add("card");

    const cardImage = document.createElement("img");
    cardImage.src = suggestion.image; 
    cardImage.alt = suggestion.title;
    card.appendChild(cardImage);

    const cardTitle = document.createElement("h3");
    cardTitle.textContent = suggestion.title;
    card.appendChild(cardTitle);

    const cardDescription = document.createElement("p");
    cardDescription.textContent = suggestion.description;
    card.appendChild(cardDescription);

    suggestedCards.appendChild(card);
  }
}


// Llamar a la función para mostrar las recomendaciones de hoy al cargar la página
showTodaySuggestions();
