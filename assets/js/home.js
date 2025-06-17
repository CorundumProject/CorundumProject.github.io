const newsContainer = document.querySelector(".news-container");
const projectsContainer = document.querySelector(".projects-container");
let newsCount = 0;
let projectsCount = 0;

fetch("/assets/json/news.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        newsContainer.innerHTML = "";
        data.forEach(news => {
            if (newsCount < 6) {
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

fetch("/assets/json/projects.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        projectsContainer.innerHTML = "";
        data.forEach(project => {
            if (projectsCount < 6) {
                const col = document.createElement("div");
                col.classList.add("col");

                const card = document.createElement("div");
                card.classList.add("card");

                const cardBody = document.createElement("div");
                cardBody.classList.add("card-body", "text-center");

                const name = document.createElement("h5");
                name.classList.add("card-title");
                name.textContent = project.name;

                const description = document.createElement("h6");
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
                projectsContainer.appendChild(col);
                projectsCount++;
            }
        })
    })
    .catch(error => console.error("Erreur :", error));