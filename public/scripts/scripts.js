/**
 * Creates basic button with formatting
 * @param {*} buttonName 
 * ^^name of button
 * @param {*} IdLocation 
 * ^^id of html element button is added to
 */
function createButton(buttonName, IdLocation) {
    let btn = document.createElement("button");
    let btnName = document.createTextNode(buttonName);

    btn.appendChild(btnName);

    let btnLocation = document.getElementById(IdLocation);

    /*
    btn.style.backgroundColor = "cyan";
    btn.style.color = "black";
    btn.style.marginTop = "10px";
    btn.style.marginBottom = "10px";
    btn.style.paddingTop = "5px";
    btn.style.paddingBottom = "5px";
    btn.style.flexGrow = "1";
    btn.style.flexShrink = "1";
    */

    btnLocation.appendChild(btn);
}


document.addEventListener("load", createButton("Start Game", "startButton"));
$("#startButton").click(function () {
    //gets selected starting location from dropdown box
    let startLocation = $("#startDrop option:selected").text();
    //gets selected destination from dropdown box
    let destinationLocation = $("#destinationDrop option:selected").text();
    //checks if start and destination location are the same and throws error if they do
    if (startLocation === destinationLocation) {
        let errorMsg = document.getElementById("locationInputError");
        errorMsg.innerText = "Start and destination locations must differ.";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "80%";
        console.log("Error: Start and Destination locations match");
    }
    else {
        let errorMsg = document.getElementById("locationInputError");
        errorMsg.innerHTML = "";
        console.log("Start Location: " + startLocation);
        console.log("Destination Location: " + destinationLocation);

        //changes page to game.html
        window.location = "/game.html";
    }


});

/**
 * functionality for location cards on index page
 */
function navigateToPage(current_id) {
    let idName = current_id;
    window.location = "/" + idName + ".html";
}

function getSelectedRadios(form) {
    let allRadios = form.elements;

    let selectedRadios = [];
    let totalSelected = 0;

    for (let i = 0; i < allRadios.length; i++) {

        if (allRadios[i].checked) {
            selectedRadios[totalSelected] = allRadios[i].value;
            totalSelected++;
        }

    }
    return selectedRadios;
}

//beginner game check
function checkBeginner() {
    let selectedRadios = getSelectedRadios(document.getElementById("quizBeginner"));
    console.log(selectedRadios);

    let correctCount = 0;

    let errorMsg = document.getElementById("begGameError");

    if (selectedRadios.length === 0) {
        errorMsg.innerText = "Select a path.";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "80%";
        console.log("Error: No path selection for question 1!");
    }
    else if (selectedRadios.length > 0) {
        errorMsg.innerHTML = null;

        //question 1
        for (let i = 0; i < selectedRadios.length; i++) {
            if (selectedRadios[i] == "Pattee and Paterno Library") {
                correctCount++;
                console.log("Correct!");
                break;
            }
        }

        //question 2
        for (let i = 0; i < selectedRadios.length; i++) {
            if (selectedRadios[i] == "West Dorms") {
                correctCount++;
                console.log("Correct!");
                break;
            }
        }

    }

    document.getElementById("results").innerHTML = "You got " + correctCount + " correct.";
    if(correctCount == 2){
        document.getElementById("results").innerHTML = "You got all " + correctCount + " correct. Congrats!";
    }
}

//intermediate game check
function checkIntermediate() {

    let selectedRadios = getSelectedRadios(document.getElementById("quizIntermediate"));
    console.log(selectedRadios);

    let correctCount = 0;

    let errorMsg = document.getElementById("begGameError");

    if (selectedRadios.length === 0) {
        errorMsg.innerText = "Select a path.";
        errorMsg.style.color = "red";
        errorMsg.style.fontSize = "80%";
        console.log("Error: No path selection for question 1!");
    }
    else if (selectedRadios.length > 0) {
        errorMsg.innerText = null;

        //question 1
        for (let i = 0; i < selectedRadios.length; i++) {
            //add correct answer
            if (selectedRadios[i] === "Old Main") {
                correctCount++;
                console.log("Correct!");
                break;
            }
        }

        //question 2
        for (let i = 0; i < selectedRadios.length; i++) {
            //add correct answer
            if (selectedRadios[i] === "HUB") {
                correctCount++;
                console.log("Correct!");
                break;
            }
        }

        //question 3
        for (let i = 0; i < selectedRadios.length; i++) {
            //add correct answer
            if (selectedRadios[i] === "Berkey Creamery") {
                correctCount++;
                console.log("Correct!");
                break;
            }
        }

    }

    document.getElementById("results").innerHTML = "You got " + correctCount + " correct.";
    if(correctCount == 3){
        document.getElementById("results").innerHTML = "You got all " + correctCount + " correct. Congrats!";
    }

}

function getUsers(){
    console.log("getUsers called");
    $.ajax({
        method: 'GET',
        url: '/users.js',
        success: (data) =>{
            console.log(data);
            data.forEach(function (arrayItem){
                var item = arrayItem.username;
                console.log("Array item username: " + item);
                $("#usersList").append("<li>" + item + "</li>");
            });
        }
    });
}
