const container = document.querySelector(".container");

createDivs();

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
        drawDiv.classList.add("black");
    });
    drawDiv.addEventListener("mouseleave", function(e){
        drawDiv.classList.remove("black");
    });
});

