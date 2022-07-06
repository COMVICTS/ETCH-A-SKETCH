const myBoard = document.getElementById("board");

const redButton = document.querySelector(".color1");
const greenButton = document.querySelector(".color2");
const blueButton = document.querySelector(".color3");

const resetButton = document.querySelector(".resetButton");

let drawingColor = "white";


for(i = 0; i< 10; i++){
    let myRow = document.createElement("div");
    myRow.classList.add("row");
    myBoard.appendChild(myRow);


    for(j = 0; j< 10; j++){

        let myColumn = document.createElement("div");
        myColumn.classList.add("column");
        myRow.appendChild(myColumn);

    }
}

const allColumns = document.querySelectorAll(".column");
allColumns.forEach(box => {
    box.addEventListener("mouseover",myDraw);
    
});

function myDraw(){
    this.style.backgroundColor = drawingColor; 
}

function resetBoard(){
    allColumns.forEach(box => {
        box.style.backgroundColor = "transparent";
        
    });
}


resetButton.addEventListener("click", resetBoard);
redButton.addEventListener("click", changeColor);
greenButton.addEventListener("click", changeColor);
blueButton.addEventListener("click", changeColor);

function changeColor(){
    
    if(this.classList.contains("color1")){
        drawingColor = "red";
        redButton.style.borderColor = "gold";
        greenButton.style.borderColor = "white";
        blueButton.style.borderColor = "white";
    }
    else if(this.classList.contains("color2")){
        drawingColor = "green";
        greenButton.style.borderColor = "gold";
        redButton.style.borderColor = "white";
        blueButton.style.borderColor = "white";
    }
    else if(this.classList.contains("color3")){
        drawingColor = "blue";
        blueButton.style.borderColor = "gold";
        greenButton.style.borderColor = "white";
        redButton.style.borderColor = "white";
    }
}





