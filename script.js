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
let draw;

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
let allowDraw = false;

drawDivs.forEach(drawDiv => {
    drawDiv.addEventListener("click", function(e){
        if (allowDraw === false){
            allowDraw = true;
            console.log(allowDraw);
        } else if (allowDraw === true){
            allowDraw = false;
            console.log(allowDraw);
        }
    });
});

drawDivs.forEach(drawDiv => {
    drawDiv.addEventListener("click", function(e){
    });
        drawDiv.addEventListener("mouseover", function(e){
            if(allowDraw === true){
                drawDiv.classList.add(color);
            }
        });
    
});


