const container = document.querySelector(".team");

fetch("/assets/json/team.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erreur lors du chargement du fichier JSON");
        }
        return response.json();
    })
    .then(data => {
        container.innerHTML = "";
        data.forEach(team => {
            const col = document.createElement("div");
            col.classList.add("col");

            const card = document.createElement("div");
            card.classList.add("card");

            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body", "text-center");

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
