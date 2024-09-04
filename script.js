

const canvas = document.querySelector(".canvas");
const numOfDivs = 16*16;


for(let i = 0 ; i < numOfDivs ; i++ ){

    let div = document.createElement("div");
    div.classList.add("grid");
    canvas.appendChild(div);
}


const cells = document.querySelectorAll(".grid");

cells.forEach(cell => { 
    
    cell.addEventListener("mouseover", () => setBGColor(cell) )
    
    
});


function setBGColor(cell){

    cell.style.backgroundColor = "black";

    let currentOpacity = Number(cell.style.opacity);

    if(currentOpacity < 1){

        cell.style.opacity = Math.min(currentOpacity + 0.25 , 1); 

    }
    
    
}