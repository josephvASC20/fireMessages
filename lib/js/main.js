const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");
const button = document.getElementById("submitButton");
button.addEventListener("click",updateDB);

//Set database object here
let db = firebase.database().ref();
//created a new database object

/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here
 let userInput = {
     "Name" : username,
     "Message" : message
 };

 db.push(userInput);
}

// Set database "child_added" event listener here
db.on('child_added',addToBoard);

let messageBoard = document.querySelector(".allMessages");


function addToBoard(rowData){
    let row = rowData.val();
    
    let myName = row.Name;
    let myMessage = row.Message;

    let pElement = document.createElement("p");
    pElement.innerText = myName + " : " + myMessage;
    messageBoard.appendChild(pElement);
}