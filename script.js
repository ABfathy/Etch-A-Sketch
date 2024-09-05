

const canvas = document.querySelector(".canvas");
let color = "black";
let numOfDivs = 0;


const buttons = document.querySelectorAll("li");
const eraser = document.querySelector(".eraser");
const rainbow = document.querySelector(".rainbow");
const clear = document.querySelector(".clear");
const size = document.querySelector(".size");




function marker(){

    
    
    const cells = document.querySelectorAll(".gridRow");

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            
            setBGColor(cell);
        
        });
    });
}


function canvasCreator(numOfDivs){

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
    
    }
    
    

function chosenButton (button){

    if (button === size ){

       numOfDivs = prompt("Choose a Grid size! (0 -> 100) ");
       canvasCreator(numOfDivs);
       marker();
       
    }
    
    if (button === eraser && buttonChecker(button)){
        color = "rgb(217, 250, 250)";
        button.classList.add("on")
    }

    if (button === clear){
        const cells = document.querySelectorAll(".gridRow");
        cells.forEach(cell => {
        
        cell.style.backgroundColor = "rgb(217, 250, 250)";
        cell.style.setProperty("--cell-opacity", 0);
        
        })

    
    }

}


function buttonChecker(button){

    if (button.classList.contains("on")){
        color = "black";
        button.classList.remove("on");
        return false;

    } else 
    
    return true;
}



buttons.forEach( button  => {

    button.addEventListener("click" , () => clickAnimation(button));
    button.addEventListener("transitionend" , () => resetClickAnimation(button));
    button.addEventListener("click" , () =>chosenButton(button));
}) 



function resetClickAnimation(button){

    button.classList.remove("clicked");

}

function clickAnimation(button){

    button.classList.add("clicked");



}


function setBGColor(cell) {
    let currentOpacity = Number(cell.style.getPropertyValue("--cell-opacity")) || 0;
    if (currentOpacity < 1) {
        currentOpacity = Math.min(currentOpacity + 0.3, 1);
        cell.style.setProperty("--cell-opacity", currentOpacity);
        cell.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
    }
}