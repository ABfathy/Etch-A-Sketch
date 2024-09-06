
const canvas = document.querySelector(".canvas");
let color = "black";
let numOfDivs = 0;
let drawStatus = true;
let randomColorsStatus = false;
let eraseStatus = false;


const buttons = document.querySelectorAll("li");
const eraser = document.querySelector(".eraser");
const rainbow = document.querySelector(".rainbow");
const clear = document.querySelector(".clear");
const size = document.querySelector(".size");
const defaultColor = document.querySelector(".default");




function marker(){

    
    
    const cells = document.querySelectorAll(".gridRow");

    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            
            
          setBGColor(cell,drawStatus,randomColorsStatus,eraseStatus)

            
        });
    });
}


function canvasCreator(numOfDivs){

    canvas.innerHTML = "";

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
    
    marker();
}
    
    

function chosenButton (button){


    if (button === size ){

       numOfDivs = parseInt(prompt("Choose a Grid size! (0 -> 100)"));

       if(numOfDivs >= 0 && numOfDivs<=100 ){

        canvasCreator(numOfDivs);
        
       } else {

        alert("Stop trying to break it lil bro!");

        return 0;

       }
       
       
    }
    
    if (button === eraser && buttonChecker(button)){
        
        eraseStatus  = true;
        drawStatus = false;
        randomColorsStatus = false;
        button.classList.add("on");
        rainbow.classList.remove("on");
        defaultColor.classList.remove("on");
        
    }

    if (button === clear){
        const cells = document.querySelectorAll(".gridRow");
        cells.forEach(cell => {
            erase(cell);
        
        });
    
    }

    if (button === rainbow && buttonChecker(button)){

        eraseStatus  = false;
        drawStatus = false;
        randomColorsStatus = true;
        button.classList.add("on");
        eraser.classList.remove("on");
        defaultColor.classList.remove("on");


    }

    if(button === defaultColor && buttonChecker(button)){

        eraseStatus  = false;
        drawStatus = true;
        randomColorsStatus = false;
        button.classList.add("on");
        eraser.classList.remove("on");
        rainbow.classList.remove("on");

    }

}


function buttonChecker(button){

    if (button.classList.contains("on")){

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


function erase(cell){

    cell.style.backgroundColor = "rgb(217, 250, 250)";
    cell.style.setProperty("--cell-opacity", 0);
    
   
}

function setBGColor(cell , drawStatus , randomColorsStatus , eraseStatus) {

    console.log("draw" + drawStatus);
    console.log("color" + randomColorsStatus);
    console.log("erase" + eraseStatus);

    if (eraseStatus){
    erase(cell);
    }

    else if(drawStatus && !randomColorsStatus ) {
    let currentOpacity = Number(cell.style.getPropertyValue("--cell-opacity")) || 0;
    if (currentOpacity <= 1) {
        currentOpacity = Math.min(currentOpacity + 0.3, 1);
        cell.style.setProperty("--cell-opacity", currentOpacity);
        cell.style.backgroundColor = `rgba(0, 0, 0, ${currentOpacity})`;
    } }
     
    else {
        
        let currentOpacity = Number(cell.style.getPropertyValue("--cell-opacity")) || 0;
        if(currentOpacity <= 1){

            currentOpacity = Math.min(currentOpacity + 0.3 , 1);
            cell.style.setProperty("--cell-opacity",currentOpacity);
            cell.style.backgroundColor = `rgba(${colorGenerator()} , ${currentOpacity})`;
        }

    }
}


function colorGenerator (){

    const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
    const r = randomBetween(0, 255);
    const g = randomBetween(0, 255);
    const b = randomBetween(0, 255);
    const rgb =  r + "," + g + "," + b;

    

    return rgb;

}