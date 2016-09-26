var mainPLayer = {
    name: "PLayer",
    rank: "pawn",
    speed: 10,
    power: 1,

    messenger: function (message){
        alert("is this correct? " + message);
    }
}

mainPlayer.name = prompt("enter your name");
alert ("welcom " + mainPLayer.name);

var phrases = [
    prompt("please enter mothers maiden name."),
    prompt("enter your phone number"),
    prompt("enter your creditcard Number"),
    prompt("who is you first born child"),
];

for (var i = 0; i < phrases.legnth; i++){
    mainPLayer.messenger(phrases[i]);
}

function PlayGame(firstNum, SecondNum){
    alert(firstNum+SecondNum);
    return firstNum + SecondNum;
}

var firstPrompt = parseInt ( prompt(""));
var secondPrompt = parseInt (prompt( ""));

var score = PlayGame(firstPrompt, secondPrompt);
alert("your score is " + score + ".");
alert("do you want to play again?")