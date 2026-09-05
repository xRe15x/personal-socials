import data from "./data.json" with {type: "json"};
import type {LinkData} from "./types.js";

const leftDiv = document.getElementById("left") as HTMLDivElement;
const rightDiv = document.getElementById("right") as HTMLDivElement;

const socialMediaUl = document.getElementById("social-media") as HTMLUListElement;
const gamesUl = document.getElementById("games") as HTMLUListElement;

const aboutMe1 = document.getElementById("about-me-1") as HTMLParagraphElement;
const aboutMe2 = document.getElementById("about-me-2") as HTMLParagraphElement;
const favGames = document.getElementById("fav-games") as HTMLParagraphElement;

const title = document.querySelector("h1") as HTMLHeadElement;

title.textContent = data.title;
aboutMe1.textContent = data["about-me-1"];
aboutMe2.textContent = data["about-me-2"];
favGames.textContent = data["fav-games"];

function insertLink(jsonData: LinkData, ul: HTMLUListElement) {
    if (jsonData.font) { // Load font if it exists
        const font = new FontFace(jsonData.name, `URL(${jsonData.font})`);

        font.load().then((loaded) => {
            document.fonts.add(loaded);
        }).catch((error) => {
            console.log(error);
        })
    }

    // Use these if available
    const img = jsonData["logo-url"] ? `<img class="link-img" src="${jsonData["logo-url"]}" alt="${jsonData.name} logo">` : "";
    const font = jsonData.font ? `style="font-family: '${jsonData.name}'"` : "";

    ul.insertAdjacentHTML("beforeend", `
        <li>
            <a href="${jsonData.url}" class="list-a">
                ${img}
                <span class="link-text" ${font}>${jsonData.name}</span>
            </a>
        </li>
    `);

    // Add hover + background change
}

data.games.forEach(gameData => {
    insertLink(gameData, gamesUl);
})

data["social-media"].forEach(mediaData => {
    insertLink(mediaData, socialMediaUl);
})

console.log("JS running!");