const container = document.querySelector(".projects");

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

            const name = document.createElement("h5");
            name.classList.add("card-title");
            name.textContent = project.name;

            const description = document.createElement("p");
            description.classList.add("card-text");
            description.textContent = project.description;

            const buttonGroup = document.createElement("div");
            buttonGroup.classList.add("btn-group", "mt-2", "mb-2", "w-100");
            buttonGroup.role = "group";
            buttonGroup.ariaLabel = project.name;

            const link = document.createElement("a");
            link.classList.add("btn", "btn-primary", "w-50");
            link.textContent = "GitHub";
            link.href = project.link;
            link.target = "_blank";

            const page = document.createElement("a");
            page.classList.add("btn", "btn-secondary", "w-50");
            page.textContent = "En savoir plus";
            page.href = "projects/" + project.page;

            cardBody.appendChild(name);
            cardBody.appendChild(description);
            buttonGroup.appendChild(link);
            buttonGroup.appendChild(page);
            cardBody.appendChild(buttonGroup);
            card.appendChild(cardBody);
            col.appendChild(card);
            container.appendChild(col);
        });
    })
    .catch(error => console.error("Erreur :", error));