import data from "./data.json" with {type: "json"};

const leftDiv = document.getElementById("left") as HTMLDivElement;
const rightDiv = document.getElementById("right") as HTMLDivElement;

const socialMediaUl = document.getElementById("social-media") as HTMLUListElement;
const gamesUl = document.getElementById("games") as HTMLUListElement;

//const aboutMe1 = document.getElementById("about-me-1") as HTMLParagraphElement;
//const aboutMe2 = document.getElementById("about-me-2") as HTMLParagraphElement;
//const favGames = document.getElementById("fav-games") as HTMLParagraphElement;

//const title = document.querySelector("h1") as HTMLHeadElement;

data.games.forEach(gameData => {
    const img = gameData["logo-url"] ? `<img class="link-img" src="${gameData["logo-url"]}" alt="${gameData.name} logo">` : "";

    gamesUl.insertAdjacentHTML("beforeend", `
        <li>
            <a href="${gameData.url}" class="list-a">
                ${img}
                <span class="link-text">${gameData.name}</span>
            </a>
        </li>
    `);
})

data["social-media"].forEach(mediaData => {
    const img = mediaData["logo-url"] ? `<img class="link-img" src="${mediaData["logo-url"]}" alt="${mediaData.name} logo">` : "";

    socialMediaUl.insertAdjacentHTML("beforeend", `
        <li>
            <a href="${mediaData.url}" class="list-a">
                ${img}
                <span class="link-text">${mediaData.name}</span>
            </a>
        </li>
    `);
})

console.log(data);

console.log("JS running!");