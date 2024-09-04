

const canvas = document.querySelector(".canvas");

const numOfDivs = prompt("choose the number of divs")

for(let i = 0 ; i < numOfDivs ; i++ ){

    let column = document.createElement("div");

    column.classList.add("gridColumn");

    for(let j = 0 ; j < numOfDivs ; j++){

        let row = document.createElement("div");
        row.classList.add("gridRow");
        column.appendChild(row);
    }

    canvas.appendChild(column);
}



const cells = document.querySelectorAll(".gridRow");

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