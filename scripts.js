//creating objects of anime (anime1,anime2,anime3,anime4,anime5,anime6)

const anime1={
    titles: "Seven Deadly Sins",
    imageURL: "https://cdn.myanimelist.net/images/anime/8/65409.jpg",
    ratings: 9.45
}
const anime2={
    titles: "That Time I Got Reincarnated as a Slime",
    imageURL: "https://cdn.myanimelist.net/images/anime/1069/123309.jpg",
    ratings: 7.50
}
const anime3={
    titles: "Neon Genesis Evangelion",
    imageURL: "https://cdn.myanimelist.net/images/anime/1314/108941.jpg",
    ratings: 8.35
}
const anime4={
    titles: "Surgeon Elise",
    imageURL: "https://cdn.myanimelist.net/images/anime/1449/140344.jpg",
    ratings: 9.30
}
const anime5={
    titles: "Samurai Champloo",
    imageURL: "https://cdn.myanimelist.net/images/anime/1375/121599.jpg",
    ratings: 9
}
const anime6={
    titles: "Fairy Tail",
    imageURL: "images/fairytail.png",
    ratings: 9.88
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
        let rating = r.ratings.toFixed(2); //toFixed func incase i want to rate a show as "7.00" without toFixedFunc it outputs 7 without the 0's.

 const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, image,rating); //edits title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }           
}



function editCardContent(card, newTitle, newImageURL,newRating) { //edits card content by grabbig the element of classes and id's and assigning them based on data values above
    card.style.display = "block";

    //note querySelector takes first element, use period "." for a class and "#" for an ID
    const cardHeader = card.querySelector("h2"); //anime title
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");//anime pic 
    cardImage.src = newImageURL;

    const cardRating = card.querySelector("#score"); //anime rating
    cardRating.textContent= newRating;

    cardImage.alt = newTitle + " Poster"; //if image doesnt load

//used console to help me figure out why images weren't displaying properly, didn't really want to change this one.
    console.log("new card:", newTitle, "- html: ", card);
}

document.addEventListener("DOMContentLoaded", showCards);

