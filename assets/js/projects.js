const container = document.querySelector(".projects");

// Récupération et affichage des projets depuis le fichier JSON
fetch("/assets/json/projects.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        container.innerHTML = "";
        data.forEach(project => {
            const col = document.createElement("div");
            col.classList.add("col");

            const card = document.createElement("div");
            card.classList.add("card");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body", "text-center");

            const icon = document.createElement("img");
            icon.classList.add("card-img", "project-icon", "text-center");
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
            link.href = "projects/" + project.page;

            // Assemblage du DOM
            cardBody.appendChild(icon);
            cardBody.appendChild(name);
            cardBody.appendChild(description);
            cardBody.appendChild(link);
            card.appendChild(cardBody);
            col.appendChild(card);
            container.appendChild(col);
        });
    })
    .catch(error => console.error("Erreur :", error));
