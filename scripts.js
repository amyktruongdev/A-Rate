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
    ratings: 8.30
}
const anime6={
    titles: "Fairy Tail",
    imageURL: "images/fairytail.png",
    ratings: 10
}

const anime7={
    titles: "Attack on Titan: The Final Season",
    imageURL: "https://cdn.myanimelist.net/images/anime/1279/131078.jpg",
    ratings: 9.90
}
const anime8={
    titles: "Parasyte: The Maxim",
    imageURL: "https://cdn.myanimelist.net/images/anime/3/73178.jpg",
    ratings: 9.10
}
const anime9={
    titles: "Solo Leveling",
    imageURL: "https://cdn.myanimelist.net/images/anime/1411/142391.jpg",
    ratings: 10
}
const anime10={
    titles: "Violet Evergarden",
    imageURL: "https://cdn.myanimelist.net/images/anime/1795/95088.jpg",
    ratings: 9.30
}
const anime11={
    titles: "Demon Slayer",
    imageURL: "https://cdn.myanimelist.net/images/anime/1286/99889.jpg",
    ratings: 9.50
}
const anime12={
    titles: "Jujutsu Kaisen",
    imageURL: "https://cdn.myanimelist.net/images/anime/1171/109222.jpg",
    ratings: 7.20
}



const anime13={
    titles: "Darling in the FranXX",
    imageURL: "https://cdn.myanimelist.net/images/anime/1614/90408.jpg",
    ratings: 4.15
}
const anime14={
    titles: "Akame ga Kill!",
    imageURL: "https://cdn.myanimelist.net/images/anime/1429/95946.jpg",
    ratings: 5.30
}
const anime15={
    titles: "Sword Art Online",
    imageURL: "https://cdn.myanimelist.net/images/anime/11/39717.jpg",
    ratings: 9.95
}
const anime16={
    titles: "The Future Diary",
    imageURL: "https://cdn.myanimelist.net/images/anime/13/33465.jpg",
    ratings: 6
}
const anime17={
    titles: "Blue Exorcist",
    imageURL: "https://cdn.myanimelist.net/images/anime/10/75195.jpg",
    ratings: 9.55
}
const anime18={
    titles: "Nana",
    imageURL: "https://cdn.myanimelist.net/images/anime/2/11232.jpg",
    ratings: 10
}



const anime19={
    titles: "Hunter x Hunter",
    imageURL: "https://cdn.myanimelist.net/images/anime/1337/99013.jpg",
    ratings: 9.60
}
const anime20={
    titles: "Tower of God",
    imageURL: "https://cdn.myanimelist.net/images/anime/1702/106229.jpg",
    ratings: 5.30
    //didnt closely follow manhwa ruined the show for me because the plot in the manhwa was already good
}
const anime21={
    titles: "Erased",
    imageURL: "https://cdn.myanimelist.net/images/anime/10/77957.jpg",
    ratings: 6.34
}
const anime22={
    titles: "Black Bullet",
    imageURL: "https://cdn.myanimelist.net/images/anime/1292/94693.jpg",
    ratings: 5.34
}
const anime23={
    titles: "Assassination Classroom",
    imageURL: "https://cdn.myanimelist.net/images/anime/5/75639.jpg",
    ratings: 9
}
const anime24={
    titles: "School Babysitters",
    imageURL: "https://cdn.myanimelist.net/images/anime/8/89978.jpg",
    ratings: 8.68
}


const anime = [anime1,anime2,anime3,anime4,anime5,anime6,anime7,anime8,anime9,anime10,anime11,anime12,anime13,anime14,anime15,anime16,anime17,anime18,anime19,anime20,anime21,anime22,anime23,anime24];

function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "";
    const templateCard = document.querySelector(".card");

    for (let i = 0; i < anime.length; i++) {
        const r=anime[i];
        let title =r.titles;
        let image=r.imageURL;
        let rating = r.ratings.toFixed(2); //toFixed func incase i want to rate a show as "7.00" without toFixedFunc it outputs 7 without the 0's.

        //******FIX IF HAVE TIME MAKE IT SO THAT ALL WHOLE NUMBERS DONT RETURN 2 DECIMAL PLACES*******
        if(r.ratings==10){
            rating = r.ratings;
        }
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

function removeAllCards() {
    var userChoice; //ok or no option
    //while loop that clears all anime titles after pressing Clear button and asks for user confirmation.
    if(confirm("Are you sure you want to clear your anime list?") ==true){
        while(anime.length){//while loop pops out all animes
            anime.pop();
        }
        userChoice=alert("List IS being cleared!");
    }
    else{
        userChoice=alert("List is NOT being canceled!");
    }
    showCards(); // Call showCards again to refresh
}


document.addEventListener('DOMContentLoaded',function(){


function highToLow(){
    anime.sort(function(a,b){
        return parseFloat(b.ratings) - parseFloat(a.ratings);
        
    });
    console.log(anime);
    showCards();
}

document.getElementById('highToLow').addEventListener('click',highToLow);
});

document.addEventListener('DOMContentLoaded',function(){


    function lowToHigh(){
        anime.sort(function(a,b){
            return parseFloat(a.ratings) - parseFloat(b.ratings);
            
        });
        console.log(anime);
        showCards();
    }
    
    document.getElementById('lowToHigh').addEventListener('click',lowToHigh);
    });