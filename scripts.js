//creating objects of anime (anime1,anime2,anime3,anime4,anime5,anime6)

const anime1={
    titles: "Seven Deadly Sins",
    imageURL: "https://cdn.myanimelist.net/images/anime/8/65409.jpg"
}
const anime2={
    titles: "That Time I Got Reincarnated as a Slime",
    imageURL: "https://cdn.myanimelist.net/images/anime/1069/123309.jpg"
}
const anime3={
    titles: "Neon Genesis Evangelion",
    imageURL: "https://cdn.myanimelist.net/images/anime/1314/108941.jpg"
}
const anime4={
    titles: "Surgeon Elise",
    imageURL: "https://cdn.myanimelist.net/images/anime/1449/140344.jpg"
}
const anime5={
    titles: "Samurai Champloo",
    imageURL: "https://cdn.myanimelist.net/images/anime/1375/121599.jpg"
}
const anime6={
    titles: "Fairy Tail",
    imageURL: "images/fairytail.png"
}
const anime = [anime1,anime2,anime3,anime4,anime5,anime6];

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < anime.length; i++) {
        const r=anime[i];
        let title =r.titles;
        let image=r.imageURL;

 const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, image);
        // Edit title and image //imageURL works
    
        cardContainer.appendChild(nextCard); // Add new card to the container
    }           
}



function editCardContent(card, newTitle, newImageURL) { //edits card content by grabbig the first element of classes h2 and img and assigning them based on data values above
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");//taking first element of img class
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

document.addEventListener("DOMContentLoaded", showCards);

