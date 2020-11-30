/**
 * Creates basic button with formatting
 * @param {*} buttonName 
 * ^^name of button
 * @param {*} IdLocation 
 * ^^id of html element button is added to
 */
function createButton(buttonName, IdLocation){
    let btn = document.createElement("button");
    let btnName = document.createTextNode(buttonName);

    btn.appendChild(btnName);

    let btnLocation = document.getElementById(IdLocation);

    btn.style.backgroundColor = "cyan";
    btn.style.color = "black";
    btn.style.marginTop = "10px";
    btn.style.marginBottom = "10px";
    btn.style.paddingTop = "5px";
    btn.style.paddingBottom = "5px";
    btn.style.flexGrow = "1";
    btn.style.flexShrink = "1";

    btnLocation.appendChild(btn);
}

//start button for index.html
var startButton = createButton("Start Game", "startButton");
$("#startButton").click(function(){
    //gets selected starting location from dropdown box
    let startLocation = $("#startDrop option:selected").text();
    //gets selected destination from dropdown box
    let destinationLocation = $("#destinationDrop option:selected").text();
    //checks if start and destination location are the same and throws error if they do
    if(startLocation === destinationLocation){
        let errorMsg = document.getElementById("locationInputError");
        errorMsg.innerText = "Start and destination locations must differ."
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "80%";
        console.log("Error: Start and Destination locations match");
    }
    else{
        let errorMsg = document.getElementById("locationInputError");
        errorMsg.innerHTML = "";
        console.log("Start Location: " + startLocation);
        console.log("Destination Location: " + destinationLocation);

        //changes page to game.html
        window.location = "/game.html";
    }

    
});

document.addEventListener("load", startButton);

/**
 * functionality for location cards on index page
 */
$(".locateCards").click(function(){

    let idName = this.id;
    window.location = "/" + idName + ".html";
    
});

document.addEventListener("load", ".locateCards");

function checkBeginner(){
    var question1 = document.getElementById("question1");
    var question2 = document.getElementById("question2");
    let correct = 0;

    if(question1 == "Pattee and Paterno Library"){
        correct++;
    }
    if(question2 == "West Dorms"){
        correct++;
    }

    document.getElementById("results").innerHTML = "You got " + correct + " correct. **Unfortunately there is an error in calculating the total currently**";
};

