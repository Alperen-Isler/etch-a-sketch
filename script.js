const container = document.querySelector(".container");
const cherryRed = document.querySelector(".cherry-red");
const creamWhite = document.querySelector(".cream-white");
const skyBlue = document.querySelector(".sky-blue");
const mustardYellow = document.querySelector(".mustard-yellow");
const mintGreen = document.querySelector(".mint-green");
const deepNavy = document.querySelector(".deep-navy");
const softOrange = document.querySelector(".soft-orange");
const lavenderPurple = document.querySelector(".lavender-purple");

createDivs();

let color;

cherryRed.addEventListener("click", function(e){
    color = "cherry-red";
});

creamWhite.addEventListener("click", function(e){
    color = "cream-white";
});

skyBlue.addEventListener("click", function(e){
    color = "sky-blue";
});

mustardYellow.addEventListener("click", function(e){
    color = "mustard-yellow";
});

mintGreen.addEventListener("click", function(e){
    color = "mint-green";
});

deepNavy.addEventListener("click", function(e){
    color = "deep-navy";
});

softOrange.addEventListener("click", function(e){
    color = "soft-orange";
});

lavenderPurple.addEventListener("click", function(e){
    color = "lavender-purple";
});

function createDivs (){
    for (let i = 0; i < 16; i++){
        const divContainer = document.createElement("div");
        divContainer.classList.add("divContainer" + i);
        container.appendChild(divContainer);
        for (let l = 0; l < 16; l++){
            const div = document.createElement("div");
            div.classList.add("drawDiv");
            divContainer.appendChild(div);
        }        
    }
}

let drawDivs = document.querySelectorAll(".drawDiv");

drawDivs.forEach(drawDiv => {
    drawDiv.addEventListener("mouseover", function(e){
        drawDiv.classList.add(color);
    });
});

