
//-------------------------variable declaration-----------------------------------------------------------------------------

const textArea = document.getElementById("text-area"); //the area where the typed number will diplay
const textSet = document.getElementById("operation-area");//the top of the textArea field
let container = [];
const deleted = document.getElementById("deleteD");

//----------------------------------function declarations----------------------------------------------------------------


//fonction that write the number typed in the display area
function typeNumbers(element) {

    let contElem = document.getElementById(element);
  
    contElem.addEventListener("click",areaText)
function areaText(){
    container.push(contElem.innerHTML);
    let containerStrin = container.join("")
    textArea.innerHTML = containerStrin;
}

}





//-----------------------------applying function and operation---------------------------------------------------------------------------------------------------------------------------------------------------

//type numbers and diplay them in the display area
typeNumbers("zero");typeNumbers("un");typeNumbers("de");typeNumbers("trois");typeNumbers("quatre");typeNumbers("cinq");typeNumbers("six");typeNumbers("sept");typeNumbers("huit");typeNumbers("neuf");

//create the delete button
deleted.addEventListener("click",Dfunction)
function Dfunction() {
    let i = container.pop()
    let containerStrin = container.join("")
    if(container.length === 0){
        containerStrin = "0"
    }
    textArea.innerHTML = containerStrin;
}









