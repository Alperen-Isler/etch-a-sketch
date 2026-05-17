const container = document.querySelector(".container");
const cherryRed = document.querySelector(".cherry-red");
const creamWhite = document.querySelector(".cream-white");
const skyBlue = document.querySelector(".sky-blue");
const mustardYellow = document.querySelector(".mustard-yellow");
const mintGreen = document.querySelector(".mint-green");
const deepNavy = document.querySelector(".deep-navy");
const softOrange = document.querySelector(".soft-orange");
const lavenderPurple = document.querySelector(".lavender-purple");
const changeGrid = document.querySelector("#changeGrid");

let gridSize = 16;
let oldGridSize;
let color = "grey";
let drawDivs;
let allowDraw;

const colors = [
    "grey",
    "cherry-red",
    "cream-white",
    "sky-blue",
    "mustard-yellow",
    "mint-green",
    "deep-navy",
    "soft-orange",
    "lavender-purple"
];

cherryRed.addEventListener("click", function(e){
    color = "cherry-red";
    allowDraw = false;
});

creamWhite.addEventListener("click", function(e){
    color = "cream-white";
    allowDraw = false;
});

skyBlue.addEventListener("click", function(e){
    color = "sky-blue";
    allowDraw = false;
});

mustardYellow.addEventListener("click", function(e){
    color = "mustard-yellow";
    allowDraw = false;
});

mintGreen.addEventListener("click", function(e){
    color = "mint-green";
    allowDraw = false;
});

deepNavy.addEventListener("click", function(e){
    color = "deep-navy";
    allowDraw = false;
});

softOrange.addEventListener("click", function(e){
    color = "soft-orange";
    allowDraw = false;
});

lavenderPurple.addEventListener("click", function(e){
    color = "lavender-purple";
    allowDraw = false;
});

function createDivs (){
    let height = 640 / gridSize;
    let width = 640 / gridSize;
    for (let i = 0; i < gridSize; i++){
        const divContainer = document.createElement("div");
        divContainer.classList.add("divContainer" + i);
        container.appendChild(divContainer);
        for (let l = 0; l < gridSize; l++){
            const div = document.createElement("div");
            div.classList.add("drawDiv");
            div.style.width = height + "px";
            div.style.height = width + "px";
            div.classList.add("grey");
            divContainer.appendChild(div);
        }        
    }
    drawDivs = document.querySelectorAll(".drawDiv");
    allowDraw = false;
    addDrawEvents();
}

function drawRequirement(){
    allowDraw = !allowDraw;
    console.log(allowDraw);
}

function addDrawEvents() {
    drawDivs.forEach(drawDiv => {

        drawDiv.addEventListener("click", drawRequirement);

        drawDiv.addEventListener("mouseover", function () {
            if (allowDraw === true) {
                drawDiv.classList.remove(...colors);
                drawDiv.classList.add(color);
            }
        });

    });
}

createDivs();

function removeGrid(){
    const div = document.querySelectorAll(".drawDiv");
    for (let i = 0; i < oldGridSize; i++){
        const divContainers = document.querySelector(".divContainer" + i);
        divContainers.remove();
    }
    div.forEach(div => {
        div.removeEventListener("click", drawRequirement);
        div.remove();
    });
}

changeGrid.addEventListener("click", function(e){
    oldGridSize = gridSize;
    let askSize = prompt("How many squares would you like per side?", 16)
    if(askSize <= 100){
        gridSize = askSize;
        removeGrid();
        createDivs();
        addDrawEvents();
    }else if(askSize > 100){
        alert("choose something below 100 squares.");
    }
});






