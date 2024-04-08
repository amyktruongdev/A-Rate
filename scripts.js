
function addAnime(){
    let title = document.querySelector("#title");
    let score = document.querySelector("#score");
    let myfile = document.querySelector("#myfile");

    message.innerHTML = "data: " + title.value + " " + score.value + " " + myfile.value;
}



