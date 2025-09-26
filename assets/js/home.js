// Sélecteurs des conteneurs pour les actualités et les projets
const newsContainer = document.querySelector(".news-container");
const projectsContainer = document.querySelector(".projects-container");
// Compteurs pour limiter l'affichage à 6 éléments
let newsCount = 0;
let projectsCount = 0;

// Récupération et affichage des actualités depuis le fichier JSON
fetch("/assets/json/news.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        // Réinitialisation du conteneur
        newsContainer.innerHTML = "";
        data.forEach(news => {
            if (newsCount < 6) {
                // Construction de la structure de la carte Bootstrap
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
                link.textContent = "Consulter";
                link.href = news.link;

                // Assemblage des éléments
                cardBody.appendChild(title);
                cardBody.appendChild(description);
                cardBody.appendChild(link);
                card.appendChild(cardBody);
                col.appendChild(card);
                newsContainer.appendChild(col);
                newsCount++;
            }
        });
    })
    .catch(error => console.error("Erreur :", error));

// Récupération et affichage des projets depuis le fichier JSON
fetch("/assets/json/projects.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        // Réinitialisation du conteneur
        projectsContainer.innerHTML = "";
        data.forEach(project => {
            if (projectsCount < 6) {
                // Construction de la structure de la carte Bootstrap
                const col = document.createElement("div");
                col.classList.add("col");

                const card = document.createElement("div");
                card.classList.add("card");

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body", "text-center");
const icon = document.createElement("img");
                            icon.classList.add("card-img", "h-25");
                            icon.src = project.icon;
                const name = document.createElement("h5");
                name.classList.add("card-title");
                name.textContent = project.name;

                const description = document.createElement("h6");
                description.classList.add("card-text");
                description.textContent = project.description;

                const link = document.createElement("a");
                link.classList.add("btn", "btn-primary", "w-100");
                link.textContent = "En savoir plus";
                link.href = "views/projects/" + project.page;

                // Assemblage des éléments
                cardBody.appendChild(icon);
                cardBody.appendChild(name);
                cardBody.appendChild(description);
                cardBody.appendChild(link);
                card.appendChild(cardBody);
                col.appendChild(card);
                projectsContainer.appendChild(col);
                projectsCount++;
            }
        })
    })
    .catch(error => console.error("Erreur :", error));
