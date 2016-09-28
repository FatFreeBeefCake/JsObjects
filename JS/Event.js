var button1 = document.getElementById('button1');



var myFunction = function myFunction() {
    alert("Hello World");
}
button1.addEventListener ('click', myFunction);

var startButton = document.getElementById('startGame');

var startGameHandler = function startMyGame (){
    alert("youve started the game");
}
startButton.addEventListener('click',startGameHandler);