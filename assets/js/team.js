// Sélection du conteneur pour la grille des membres de l'équipe
const container = document.querySelector(".team");

// Récupération et traitement du fichier JSON contenant les données de l'équipe
fetch("/assets/json/team.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        // Réinitialisation du conteneur
        container.innerHTML = "";

        // Création d'une carte Bootstrap pour chaque membre
        data.forEach(team => {
            const col = document.createElement("div");
            col.classList.add("col");

            // Structure de la carte
            const card = document.createElement("div");
            card.classList.add("card");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body", "text-center");

            // Création et configuration des éléments de la carte
            const avatar = document.createElement("img");
            avatar.src = team.avatar;
            avatar.classList.add("avatar", "rounded", "mb-2");
            avatar.alt = team.name;

            const name = document.createElement("h5");
            name.classList.add("card-title");
            name.textContent = team.name;

            const role = document.createElement("h6");
            role.classList.add("card-subtitle", "mb-2", "text-body-secondary");
            role.textContent = team.role;

            const link = document.createElement("a");
            link.classList.add("btn", "btn-primary", "mt-2", "mb-2", "w-100");
            link.textContent = "GitHub";
            link.href = team.link;

            // Assemblage de la structure HTML
            cardBody.appendChild(avatar);
            cardBody.appendChild(name);
            cardBody.appendChild(role);
            cardBody.appendChild(link);
            card.appendChild(cardBody);
            col.appendChild(card);
            container.appendChild(col);
        });
    })
    .catch(error => console.error("Erreur :", error));