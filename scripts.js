
function addAnime(){
    let title = document.querySelector("#title");
    let score = document.querySelector("#score");
    let myfile = document.querySelector("#myfile");

    message.innerHTML = "data: " + title.value + " " + score.value + " " + myfile.value;
}

const FRESH_PRINCE_URL = "https://upload.wikimedia.org/wikipedia/en/3/33/Fresh_Prince_S1_DVD.jpg";
const CURB_POSTER_URL = "https://m.media-amazon.com/images/M/MV5BZDY1ZGM4OGItMWMyNS00MDAyLWE2Y2MtZTFhMTU0MGI5ZDFlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg";
const EAST_LOS_HIGH_POSTER_URL = "https://static.wikia.nocookie.net/hulu/images/6/64/East_Los_High.jpg";
const FAIRY_TAIL = "images/fairytail.png";

// This is an array of strings (TV show titles)
let titles = [
    "Seven Deadly Sins",
    "That Time I Got Reincarnated as a Slime",
    "East Los High", "Surgeon Elise", "Samurai Champloo", "Fairy Tail"
];

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

 const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
}
function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

document.addEventListener("DOMContentLoaded", showCards);

