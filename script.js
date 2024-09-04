

const canvas = document.querySelector(".canvas");

const numOfDivs = 256;

for(let i = 0 ; i < numOfDivs ; i++ ){

    let Div = document.createElement("div");
    Div.classList.add("grid")
    canvas.appendChild(Div);
}
