const container = document.querySelector(".news-container");
let newsCount = 0;

// Charge les 3 actualités les plus récentes depuis le JSON
fetch("/assets/json/projects/quick.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        data.forEach(news => {
            // Réinitialise le container à chaque itération
            container.innerHTML = "";

            if (newsCount < 3) {
                // Structure Bootstrap pour la grille responsive
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
                link.textContent = "En savoir plus";
                link.href = news.link;

                // Assemblage des éléments du DOM
                cardBody.appendChild(title);
                cardBody.appendChild(description);
                cardBody.appendChild(link);
                card.appendChild(cardBody);
                col.appendChild(card);
                container.appendChild(col);
                newsCount++;
            }
        });
    })
    .catch(error => console.error("Erreur :", error));