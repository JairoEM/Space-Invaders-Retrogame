import {Defender, Bullet, Invader} from "./classes.js";

//Create objects
var svg = document.getElementById("table");
var defender = new Defender();
svg.appendChild(defender.object);


// Create valuable variables
var x;
var key;


// Create function to move the defender's spaceship
var imgForsen = document.getElementById("mySpaceship");
defender.object.setAttribute('fill', 'url(#mySpaceship)');
var laser;

document.addEventListener("keydown", function playerActions(event){
    key = event.keyCode;
    x = parseInt(defender.object.getAttribute("x"));
    
    // Make spaceship moves
    if((key == 39) && (x <= 240)){
        defender.object.setAttribute("x", x + 2);
        imgForsen.setAttribute("x" , x + 2);
    }
    if((key == 37) && (x >= 0)){
        defender.object.setAttribute("x", x - 2);
        imgForsen.setAttribute("x" , x - 2);
    }

    // Make spaceship shoots
    if(key == 38){
        var shoot = new Bullet(x + 5);
        svg.appendChild(shoot.object);

        laser = document.createElement("AUDIO");
        laser.setAttribute("src", "Sounds/laser.mp3");
        laser.play();
    }
});


//Interval to make shoots move
var bullets;
var bulletsPosition;
setInterval( () => {
    bullets = document.getElementsByClassName("circle");
    for(let i = 0; i < bullets.length; i++){ 
        bulletsPosition = parseInt(bullets[i].getAttribute("cy"));
        bullets[i].setAttribute("cy", bulletsPosition - 2);

        if(bulletsPosition <= 0){
            svg.removeChild(bullets[i]);
        }
    }



}, 10);


//Interval to create the invaders
function createInitialInvaders(){
    for(let i = 12; i <= 250; i = i+35){
        var invader = new Invader(i-2, 3, 20);
        svg.appendChild(invader.object);
    }
}
createInitialInvaders();


// Invaders move in X and Y axes and create a new row
var rectangles;
var rectanglesPositionX;
var rectanglesPositionY;
var invadersMoveX = 1;
var countX = 8;
var countY = 2;
setInterval( () => {
    rectangles = document.getElementsByClassName("rectangle");
    for(let i = 0; i < rectangles.length; i++){
        if(invadersMoveX % 2 == 0){
            rectanglesPositionX = parseInt(rectangles[i].getAttribute("x"));
            rectangles[i].setAttribute("x", rectanglesPositionX + 2);
        }else{
            rectanglesPositionX = parseInt(rectangles[i].getAttribute("x"));
            rectangles[i].setAttribute("x", rectanglesPositionX - 2);
        }     
    }
    if(countX == 12){
        invadersMoveX++;
        countX = 0;
    }
    countX++;

    if(countY == 24){
        rectangles = document.getElementsByClassName("rectangle");
        for(let i = 0; i < rectangles.length; i++){ 
            rectanglesPositionY = parseInt(rectangles[i].getAttribute("y"));
            rectangles[i].setAttribute("y", rectanglesPositionY + 24);
        }
    
        for(let i = 12; i <= 250; i = i+35){
            var invader = new Invader(i, 3, 20);
            svg.appendChild(invader.object);
        }
        countY=0;  
    }
    countY++;
} , 500);