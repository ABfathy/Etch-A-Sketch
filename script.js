

const canvas = document.querySelector(".canvas");
const numOfDivs = 16*16;


for(let i = 0 ; i < numOfDivs ; i++ ){

    let Div = document.createElement("div");
    Div.classList.add("grid")
    canvas.appendChild(Div);
}


const cells = document.querySelectorAll(".grid");

cells.forEach(cell => { 
    
    cell.addEventListener("mouseover", () => setBGColor(cell) )
    
    
});





function setBGColor(cell){

    cell.style.backgroundColor = "black";

    let currentOpacity = Number(cell.style.opacity);

    if(currentOpacity < 1){

        cell.style.opacity = `${currentOpacity + 0.25}`; 

    }
    console.log(currentOpacity);
    
}