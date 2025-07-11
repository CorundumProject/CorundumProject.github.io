const container = document.querySelector(".news-container");
let newsCount = 0;

fetch("/assets/json/projects/maintenance.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        data.forEach(news => {
            container.innerHTML = "";
            // Limite à 3 actualités maximum
            if (newsCount < 3) {
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

                // Bouton avec lien vers la page détaillée
                const link = document.createElement("a");
                link.classList.add("btn", "btn-primary", "mt-2", "mb-2", "w-100");
                link.textContent = "En savoir plus";
                link.href = news.link;

                // Construction de la hiérarchie des éléments DOM
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