
// user name button
var userName;
    console.log(userName);
var button1 = document.getElementById('Name');
var enterName = function enterName() {
    userName = prompt("Enter Your Name.");
    alert("Hello " + userName + ".");
    console.log(userName);
}
button1.addEventListener ('click', enterName);

// start button
var startButton = document.getElementById('startGame');
var startGameHandler = function startMyGame (){
    if(userName === undefined){
        alert("Please enter a valid name.");
    } else if (userName != undefined){
        alert("Welcome " + userName + " the game has begun!");
    }
}
startButton.addEventListener('click',startGameHandler);

var gameButton = function gameButtonConstruct (name){
    var button;
    var fire = function (){
        alert("fire");
    }
}

var fireweaponButton = new gameButton();
fireweaponButton.button = document.getElementById('fireWeapon');
fireweaponButton.button.addEventListener('click', fireweaponButton.fire);

