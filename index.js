
//-------------------------variable declaration-----------------------------------------------------------------------------

let textArea = document.getElementById("text-area"); //the area where the typed number will diplay
let textSet = document.getElementById("operation-area");//the top of the textArea field
let zero = document.getElementById("zero");
let one = document.getElementById("un");
let two = document.getElementById("de");
let three = document.getElementById("trois");
let four = document.getElementById("quatre");
let five = document.getElementById("cinq");
let six = document.getElementById("six");
let seven = document.getElementById("sept");
let eight = document.getElementById("huit");
let nine = document.getElementById("neuf");
let container = [];
let signs = ["+","-","÷","x"]
let operationRanningFunction = 0;
let containerStrin = "0";
let textSetV = "";
let momentContainer = "";
let containerDe = "";
let suprime = false;
let tab =[];
let resulta =0;
let egalCounter = 0;
let deleted = document.getElementById("deleteD");
let soustraire = document.getElementById("moin");
let additionner = document.getElementById("plus");
let diviser = document.getElementById("division");
let multiplier = document.getElementById("multiplication");
let egal = document.getElementById("egal");
textArea.innerHTML = containerStrin;

//----------------------------------function declarations----------------------------------------------------------------



//create the delete button
deleted.addEventListener("click",Dfunction)
function Dfunction() {
    suprime = true;
     container.pop()
    containerDe = container.join("")
    if(container.length === 0){
        textArea.innerHTML = 0
    }else
    textArea.innerHTML = containerDe;
   
 
}



//-----------------------------applying function and operation---------------------------------------------------------------------------------------------------------------------------------------------------

let quiReliTouchEtFonction = 0
zero.addEventListener("click",area_0)
function area_0(){
    
    if(egalCounter > 0){
        textSet.style.opacity = "0%";
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
   
    container.push(this.innerHTML);
    containerStrin = container.join("")
    textArea.innerHTML = containerStrin;

    operationRanningFunction = false;
    egalCounter = 0;
   
}

one.addEventListener("click",area_1)
function area_1(){
    if(egalCounter > 0){
        textSet.style.opacity = "0%";
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
    container.push(this.innerHTML);
    containerStrin = container.join("")
    textArea.innerHTML = containerStrin;
    operationRanningFunction = false;
    egalCounter = 0;
  
}

two.addEventListener("click",area_2)
function area_2(){
    if(egalCounter > 0){
        textSet.style.opacity = "0%";
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
    container.push(this.innerHTML);
    containerStrin = container.join("")
    textArea.innerHTML = containerStrin;
    operationRanningFunction = false;
    egalCounter = 0;
   
}

three.addEventListener("click",area_3)
function area_3(){
    if(egalCounter > 0){
        textSet.style.opacity = "0%";
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
    container.push(this.innerHTML);
    containerStrin = container.join("")
    textArea.innerHTML = containerStrin;
    operationRanningFunction = false;
    egalCounter = 0;
   
}

four.addEventListener("click",area_4)
function area_4(){
    if(egalCounter > 0){
        textSet.style.opacity = "0%";
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
    container.push(this.innerHTML);
    containerStrin = container.join("")
    textArea.innerHTML = containerStrin;
    operationRanningFunction = false;
    egalCounter = 0;
 
}

five.addEventListener("click",area_5)
function area_5(){
    if(egalCounter > 0){
        textSet.style.opacity = "0%";
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
    container.push(this.innerHTML);
    containerStrin = container.join("")
    textArea.innerHTML = containerStrin;
    operationRanningFunction = false;
    egalCounter = 0;
   
}

six.addEventListener("click",area_6)
function area_6(){
    if(egalCounter > 0){
        textSet.style.opacity = "0%";
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
    container.push(this.innerHTML);
    containerStrin = container.join("")
    textArea.innerHTML = containerStrin;
    operationRanningFunction = false;
    egalCounter = 0;
   
}

seven.addEventListener("click",area_7)
function area_7(){
    if(egalCounter > 0){
        textSet.style.opacity = "0%";
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
    container.push(this.innerHTML);
    containerStrin = container.join("")
    textArea.innerHTML = containerStrin;
    operationRanningFunction = false;
    egalCounter = 0;
   
}

eight.addEventListener("click",area_8);
function area_8(){
    if(egalCounter > 0){
        textSet.style.opacity = "0%";
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
    container.push(this.innerHTML);
    containerStrin = container.join("")
    textArea.innerHTML = containerStrin;
    operationRanningFunction = false;
    egalCounter = 0;
   
}

nine.addEventListener("click",area_9);
function area_9(){
     if(egalCounter > 0){
        textSet.style.opacity = "0%";
       
        quiReliTouchEtFonction = 1;
    }
    if(suprime && textArea.innerHTML == 0){
        suprime = false
    }
    container.push(this.innerHTML);
    containerStrin = container.join("");
    textArea.innerHTML = containerStrin;
    operationRanningFunction = false;
    egalCounter = 0;
 
}

            //---------------------------------------basics operations---------------------------------------------------------

//substraction button

soustraire.addEventListener("click",sousFunction)
function sousFunction() {
   

     //if the delete button is typed: tab take the current typed number the display it followed by the neg sign  
     if(suprime){
            
        if(operationRanningFunction === true){
            let te = tab.filter(e => !parseInt(e))
            tab.splice(tab.indexOf(te[0]),1,"-")
            let temporair = textSetV.split("");
            temporair.pop()
            temporair.push("-")                                   
            
            textSetV = temporair.join('');
        }else{
           
            if(egalCounter > 0){
                textSetV = '';
                tab.push(parseInt(resulta))
            }else
            tab.push(parseInt(containerDe)) //deleted part

            if(tab.length === 1){
                tab.push('-')
            }
            if(quiReliTouchEtFonction === 1){
                textSetV = '';
                quiReliTouchEtFonction = 0;
            }
            if(egalCounter > 0){
                textSetV = `${resulta}-`
            }else
            textSetV += `${containerDe}-`
       
        }
           suprime = false;
          
       }else{
        if(operationRanningFunction === true){
            let te = tab.filter(e => !parseInt(e))
            tab.splice(tab.indexOf(te[0]),1,"-")

            let temporair = textSetV.split("");
            temporair.pop()
            temporair.push("-")                                   
            textSetV = temporair.join('');
           
        }else{
            if(egalCounter > 0){
                textSetV = '';
                tab.push(parseInt(resulta))
            }else
            tab.push(parseInt(containerStrin)) //deleted part

            if(tab.length === 1){
                tab.push('-')
            }
            if(quiReliTouchEtFonction === 1){
                textSetV = '';
                quiReliTouchEtFonction = 0;
            }
            if(egalCounter > 0){
                textSetV = `${resulta}-`
            }else
            textSetV += `${containerStrin}-`
        }
       }

    //display the courrent typed nomber on the top
     textSet.innerHTML = textSetV 

   
   textSet.style.opacity = "100%";

    //when begin new operation after the first typed number the textArea filed is free to let the next number typed
    if(tab.length === 1){
        container = [] 
        
    }

       //the operation is done in the tab array afterwards, put the result as the first item is the array and the display the result in the textArea field
       if (tab.length === 3){
        let tes = tab.filter(e => !parseInt(e))
        let a = tab.filter(e => parseInt(e))
       
        if(tes[0] === "-"){
            resulta =  a[0] - a[1];
        }else if (tes[0] === "+"){
         resulta =  a[0] + a[1];
        }else if (tes[0] === "/"){
         resulta =  a[0] / a[1];
        }else if (tes[0] === "x"){
         resulta =  a[0] * a[1];
        }
         
         textArea.innerHTML = resulta;
         tab = [resulta]
        tab.push('-')
    }

     container = [] //let the next numbers typed instead of getting the previous an courrent typed number
     operationRanningFunction = true;
     egalCounter = 0;

}

//addition button
additionner.addEventListener("click",addFunction)
function addFunction() {

    if(suprime){
            
        if(operationRanningFunction === true){
            let te = tab.filter(e => !parseInt(e))
            tab.splice(tab.indexOf(te[0]),1,"+")
            let temporair = textSetV.split("");
            temporair.pop()
            temporair.push("+")                                   
            
            textSetV = temporair.join('');
        }else{
            if(egalCounter > 0){
                textSetV = '';
                tab.push(parseInt(resulta))
            }else
            tab.push(parseInt(containerDe)) //deleted part


            if(tab.length === 1){
                tab.push('+')
            }
            if(quiReliTouchEtFonction === 1){
                textSetV = '';
                quiReliTouchEtFonction = 0;
            }
            if(egalCounter > 0){
                textSetV = `${resulta}+`
            }else
            textSetV += `${containerDe}+`
        }
           suprime = false;
       }else{
        if(operationRanningFunction === true){
            let te = tab.filter(e => !parseInt(e))
            tab.splice(tab.indexOf(te[0]),1,"+")

            let temporair = textSetV.split("");
            temporair.pop()
            temporair.push("+")                                   
            textSetV = temporair.join('');
           
        }else{
            if(egalCounter > 0){
                textSetV = '';
                tab.push(parseInt(resulta))
            }else
            tab.push(parseInt(containerStrin)) //deleted part


            if(tab.length === 1){
                tab.push('+')
            }
            if(quiReliTouchEtFonction === 1){
                textSetV = '';
                quiReliTouchEtFonction = 0;
            }

            if(egalCounter > 0){
                textSetV = `${resulta}+`
            }else
            textSetV += `${containerStrin}+`

        }
       }
    
        //display the courrent typed nomber on the top
         textSet.innerHTML = textSetV 
    
       
       textSet.style.opacity = "100%";
    
        //when begin new operation after the first typed number the textArea filed is free to let the next number typed
        if(tab.length === 1){
            container = [] 
            
        }
    
           //the operation is done in the tab array afterwards, put the result as the first item is the array and the display the result in the textArea field
           if (tab.length === 3){
            let tes = tab.filter(e => !parseInt(e))
            let a = tab.filter(e => parseInt(e))
           
            if(tes[0] === "-"){
                resulta =  a[0] - a[1];
            }else if (tes[0] === "+"){
             resulta =  a[0] + a[1];
            }else if (tes[0] === "/"){
             resulta =  a[0] / a[1];
            }else if (tes[0] === "x"){
             resulta =  a[0] * a[1];
            }
             
             textArea.innerHTML = resulta;
             tab = [resulta]
            tab.push('+')
        }
    
         container = [] //let the next numbers typed instead of getting the previous an courrent typed number
         operationRanningFunction = true;
         egalCounter = 0;
}
    //multiplication button
    multiplier.addEventListener("click",mulFunction)
function mulFunction() {
  
        if(suprime){                                   
          
            if(operationRanningFunction === true){
                let te = tab.filter(e => !parseInt(e))
                tab.splice(tab.indexOf(te[0]),1,"x")
                let temporair = textSetV.split("");
                temporair.pop()
                temporair.push("x")                                   
                
                textSetV = temporair.join('');
                             
            }else{
               
                if(egalCounter > 0){
                    textSetV = '';
                    tab.push(parseInt(resulta))
                }else
                tab.push(parseInt(containerDe)) //deleted part
                
                if(tab.length === 1){
                    tab.push('x')
                }
                if(quiReliTouchEtFonction === 1){
                    textSetV = '';
                    quiReliTouchEtFonction = 0;
                }
                
                if(egalCounter > 0){
                    textSetV = `${resulta}x`
                }else
                textSetV += `${containerDe}x`
            }
               
               suprime = false;
           }else{

            if(operationRanningFunction === true){
                let te = tab.filter(e => !parseInt(e))
                tab.splice(tab.indexOf(te[0]),1,"x")

                let temporair = textSetV.split("");
                temporair.pop()
                temporair.push("x")                                   
                textSetV = temporair.join('');
               
            }else{
                if(egalCounter > 0){
                    textSetV = '';
                    tab.push(parseInt(resulta));      
                }else
                tab.push(parseInt(containerStrin)) //deleted part
                
                if(tab.length === 1){
                    tab.push('x')
                }
                if(quiReliTouchEtFonction === 1){
                    textSetV = '';
                    quiReliTouchEtFonction = 0;
                }
                if(egalCounter > 0){
                    textSetV = `${resulta}x`
                }else
                textSetV += `${containerStrin}x`
            }
             
           }
        
            //display the courrent typed nomber on the top
             textSet.innerHTML = textSetV 
        
           
           textSet.style.opacity = "100%";
        
            //when begin new operation after the first typed number the textArea filed is free to let the next number typed
            if(tab.length === 1){
                container = [] 
                
            }
        
               //the operation is done in the tab array afterwards, put the result as the first item is the array and the display the result in the textArea field
               if (tab.length === 3){
                let tes = tab.filter(e => !parseInt(e))
                let a = tab.filter(e => parseInt(e))
               
                if(tes[0] === "-"){
                    resulta =  a[0] - a[1];
                }else if (tes[0] === "+"){
                 resulta =  a[0] + a[1];
                }else if (tes[0] === "/"){
                 resulta =  a[0] / a[1];
                }else if (tes[0] === "x"){
                 resulta =  a[0] * a[1];
                }
                 
                 textArea.innerHTML = resulta;
                 tab = [resulta]
                tab.push('x')
            }
        
             container = [] //let the next numbers typed instead of getting the previous an courrent typed number
             operationRanningFunction = true;
             egalCounter = 0;
    }

    //division button
    diviser.addEventListener("click",divFunction)
 function divFunction() {
 
        if(suprime){
            
            if(operationRanningFunction === true){
                let te = tab.filter(e => !parseInt(e))
                tab.splice(tab.indexOf(te[0]),1,"÷")
                let temporair = textSetV.split("");
                temporair.pop()
                temporair.push("÷")                                   
                
                textSetV = temporair.join('');
            }else{

                if(egalCounter > 0){
                    textSetV = '';
                    tab.push(parseInt(resulta))
                }else{
                    tab.push(parseInt(containerDe)) //deleted part
                }
                

                if(tab.length === 1){
                    tab.push('/')
                }

                if(quiReliTouchEtFonction === 1){
                    textSetV = '';
                    quiReliTouchEtFonction = 0;
                }

                if(egalCounter > 0){
                    textSetV = `${resulta}÷`
                }else
                textSetV += `${containerDe}÷`
                

            }
               suprime = false;
           }else{
            if(operationRanningFunction === true){
                let te = tab.filter(e => !parseInt(e))
                tab.splice(tab.indexOf(te[0]),1,"/")

                let temporair = textSetV.split("");
                temporair.pop()
                temporair.push("÷")                                   
                textSetV = temporair.join('');
               
            }else{

                 if(egalCounter > 0){
                    textSetV = '';
                    tab.push(parseInt(resulta));           
                }else
                tab.push(parseInt(containerStrin)) //deleted part

                if(tab.length === 1){
                    tab.push('/')
                }
                if(quiReliTouchEtFonction === 1){
                    textSetV = '';
                    quiReliTouchEtFonction = 0;
                }

                if(egalCounter > 0){
                    textSetV = `${resulta}÷`
                }else
                textSetV += `${containerStrin}÷`


            }
           }
        
            //display the courrent typed nomber on the top
             textSet.innerHTML = textSetV 
        
           
           textSet.style.opacity = "100%";
        
            //when begin new operation after the first typed number the textArea filed is free to let the next number typed
            if(tab.length === 1){
                container = [] 
                
            }
        
               //the operation is done in the tab array afterwards, put the result as the first item is the array and the display the result in the textArea field
               if (tab.length === 3){
                let tes = tab.filter(e => !parseInt(e))
                let a = tab.filter(e => parseInt(e))
               
                if(tes[0] === "-"){
                    resulta =  a[0] - a[1];
                }else if (tes[0] === "+"){
                 resulta =  a[0] + a[1];
                }else if (tes[0] === "/"){
                 resulta =  a[0] / a[1];
                }else if (tes[0] === "x"){
                 resulta =  a[0] * a[1];
                }
                 
                 textArea.innerHTML = resulta;
                 tab = [resulta]
                tab.push('/')
            }
        
             container = [] //let the next numbers typed instead of getting the previous an courrent typed number
             operationRanningFunction = true;
             egalCounter = 0;
    }




    //equal button--------------------------HERE I AM----------------
    egalCounter = 0;
    let tabEgal = [];
    egal.addEventListener("click",equal)
function equal(){
  
  egalCounter++;

           //display first result
           if(egalCounter === 1){
            if(suprime){
                tab.push(parseInt(containerDe)) //deleted part
                textSetV += ` ${containerDe} ` 
                suprime = false;
            }else{
                tab.push(parseInt(containerStrin))
                textSetV +=` ${containerStrin} `
            }
            textSetV += ` ${this.innerHTML} `
            textSet.innerHTML = textSetV
            r = tab[1];

                if (tab.length === 3){
                let tes = tab.filter(e => !parseInt(e))
                a = tab.filter(e => parseInt(e))
            
                if(r === "-"){
                    resulta =  tab[0] - tab[2];
                }else if (r === "+"){
                resulta =  tab[0] + tab[2];
                }else if (r === "/"){
                resulta =  tab[0] / tab[2];
                }else if (r === "x"){
                resulta =  tab[0] * tab[2];
                
                }
                tabEgal = a;
                
                tab = []
            }
        }else if(egalCounter > 1){
            if(r === "/"){
                textSetV = `${resulta} ÷ ${tabEgal[1]} = `
            }else
            textSetV = `${resulta} ${r} ${tabEgal[1]} = `
            
                 if(r === "-"){
                resulta -= tabEgal[1];
            }else if (r === "+"){
             resulta += tabEgal[1];
            }else if (r === "/"){
             resulta /= tabEgal[1];
            }else if (r === "x"){
             resulta *= tabEgal[1];
            }

           }
           
           textSet.innerHTML = textSetV
            textArea.innerHTML = resulta;
            container = [];
       

      
    }
    //-------------------------basic operation---------------------------------------------------

