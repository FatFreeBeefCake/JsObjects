var Player = function (){
    var name; 
    var speed = 10;
    var health = 100;
    var healing = "Strong";
    this.ammoCount = 100;

    this.ReArm = function (ammo){
        this.ammoCount += ammo;

    }
}

var Fred = new Player();
var Ruby = new Player();

function UpdatePlayer(current, healthUpdate, ammo){
    current.name = prompt("Enter your name current player.");
    alert(" your name is now " + current.name + "!");
    current.health = healthUpdate;
    current.healing = "weak";
    current.ReArm(ammo);
    alert (current.name + " has " + current.ammoCount + " shells in their pocket." );
}

UpdatePlayer(Fred, 20, 1);
UpdatePlayer(Ruby, 50, 65);