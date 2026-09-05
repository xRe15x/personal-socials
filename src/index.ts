import data from "./data.json" with {type: "json"};
import type {LinkData} from "./types.js";

const leftDiv = document.getElementById("left") as HTMLDivElement;
const leftBgTransition = document.querySelector(".left-bg-transition") as HTMLDivElement;

const rightDiv = document.getElementById("right") as HTMLDivElement;
const rightBgTransition = document.querySelector(".right-bg-transition") as HTMLDivElement;

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
    const font = jsonData.font ? `font-family: '${jsonData.name}';` : "";
    const hoverColour = jsonData.colour ? `--hover-colour: ${jsonData.colour}` : "";

    const style = `style="${font} ${hoverColour}"`;

    ul.insertAdjacentHTML("beforeend", `
        <li>
            <a data-id="${jsonData.name}" href="${jsonData.url || "#"}" class="list-a" ${style}>
                ${img}
                <span class="link-text">${jsonData.name}</span>
            </a>
        </li>
    `);

    // Background image change on hover
    const link = ul.querySelector(`[data-id="${jsonData.name}"]`) as HTMLLinkElement;
    const bg = `URL(${jsonData["background-url"]})`;

    if (link && jsonData["background-url"]) {
        const bgElement = ul === gamesUl ? rightDiv : leftDiv;
        const bgTransitionElement = ul === gamesUl ? rightBgTransition : leftBgTransition;

        link.addEventListener("mouseenter", () => {
            bgElement.style.backgroundImage = `linear-gradient(rgb(0,0,0,0.6)), ${bg}`;
            bgTransitionElement.classList.add("active");
        })

        link.addEventListener("mouseleave", () => {
            bgTransitionElement.classList.remove("active");
        })
    }
}

data.games.forEach(gameData => {
    insertLink(gameData, gamesUl);
})

data["social-media"].forEach(mediaData => {
    insertLink(mediaData, socialMediaUl);
})

console.log("JS running!");