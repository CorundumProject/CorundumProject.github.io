// Sélectionne le conteneur des actualités et initialise un compteur
const container = document.querySelector(".news-container");
let newsCount = 0;

// Récupère et traite le fichier JSON des actualités
fetch("/assets/json/news.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        // Vérifie que data est un tableau non vide
        if (Array.isArray(data) && data.length > 0) {
            data.forEach(news => {
                // Limite l'affichage à une seule actualité
                if (newsCount < 1) {
                    container.innerHTML = "";
                    // Structure Bootstrap pour l'affichage responsive
                    const col = document.createElement("div");
                    col.classList.add("col");

                    const card = document.createElement("div");
                    card.classList.add("card");

                    const cardBody = document.createElement("div");
                    cardBody.classList.add("card-body", "text-center");

                    const title = document.createElement("h5");
                    title.classList.add("card-title");
                    title.textContent = news.title;

                    const description = document.createElement("h6");
                    description.classList.add("card-text");
                    description.textContent = news.description;

                    const link = document.createElement("a");
                    link.classList.add("btn", "btn-primary", "mt-2", "mb-2", "w-100");
                    link.innerHTML = "Consulter";
                    link.href = news.link;

                    // Construction de l'arborescence DOM
                    cardBody.appendChild(title);
                    cardBody.appendChild(description);
                    cardBody.appendChild(link);
                    card.appendChild(cardBody);
                    col.appendChild(card);
                    container.appendChild(col);
                    newsCount++;
                }
            });
        }
    })
    .catch(error => console.error("Erreur :", error));