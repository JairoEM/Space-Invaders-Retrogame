import {Defender, Bullet, Invader} from "./classes.js";

//Create objects
var spaceship = document.getElementById("spaceship");
var bullet = new Bullet();
var defender = new Defender(spaceship, bullet);

var svg = document.getElementById("table");
var svgNS = svg.namespaceURI;

//Create valuable attributes
var x;


//Create function to move the defender's spaceship
var key;
var imgForsen = document.getElementById("mySpaceship");
// var moveRight = false;
// var moveLeft = false;
document.addEventListener("keydown", function playerMove(event){
    //Capture the key event and check defenders x position
    key = event.keyCode;
    x = parseInt(spaceship.getAttribute("x"));
    
    //Make the spaceship move
    if((key == 39) && (x <= 240)){
        spaceship.setAttribute("x" , x + 2);
        imgForsen.setAttribute("x" , x + 2);
    }
    if((key == 37) && (x >= 0)){
        spaceship.setAttribute("x" , x - 2);
        imgForsen.setAttribute("x" , x - 2);
    }

    // while((key == 39) && (x <= 240)){
    //     spaceship.setAttribute("x" , x + 2);
    // }
    // while((key == 37) && (x >= 0)){
    //     spaceship.setAttribute("x" , x - 2);
    // }
});


//Create function to shoot
var laser;
document.addEventListener("keypress", function playerShoots(event){
    //Capture the key event and check defenders x position
    key = event.keyCode;
    x = parseInt(spaceship.getAttribute("x"));

    if(key == 38){
        var circ = document.createElementNS(svgNS,'circle');
        circ.setAttribute('cx', x + 5);
        circ.setAttribute('cy', 386);
        circ.setAttribute('r', 2);
        circ.setAttribute("class", "circle")
        circ.setAttribute('fill','black');
        svg.appendChild(circ);

        laser = document.createElement("AUDIO");
        laser.setAttribute("src", "Sounds/laser.mp3");
        laser.setAttribute("class", "laser");
        laser.play();
    }
});


//Interval to make shoots move
var circles;
var circlesPosition;
var lasers;
setInterval( () => {
    circles = document.getElementsByClassName("circle");
    lasers = document.getElementsByClassName("laser");
    
    for(let i = 0; i < circles.length; i++){ 
        circlesPosition = parseInt(circles[i].getAttribute("cy"));
        circles[i].setAttribute("cy", circlesPosition - 2);

        if(circlesPosition == 0){
            svg.removeChild(circles[i]);
            body.removeChild(lasers[i]);
        }
    }
}, 10);


//Interval to create the invaders
function createInitialInvaders(){
    for(let i = 12; i <= 250; i = i+35){
        var rect = document.createElementNS(svgNS,'rect');
        rect.setAttribute('x', i-2);
        rect.setAttribute('y', 0);
        rect.setAttribute('width', 16);
        rect.setAttribute('height', 16);
        rect.setAttribute("class", "rectangle")
        rect.setAttribute('fill','purple');
        svg.appendChild(rect);
    }
}
createInitialInvaders();

setInterval( () => {
    for(let i = 12; i <= 250; i = i+35){
        var rect = document.createElementNS(svgNS,'rect');
        rect.setAttribute('x', i);
        rect.setAttribute('y', -24);
        rect.setAttribute('width', 16);
        rect.setAttribute('height', 16);
        rect.setAttribute("class", "rectangle")
        rect.setAttribute('fill','purple');
        svg.appendChild(rect);
    }   
} , 12000);


//Interval to move the invaders X and Y axes
var countSeconds = 8;
var invadersMoveX = 1;
var rectangles;
var rectanglesPositionX;
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
    if(countSeconds == 12){
        invadersMoveX++;
        countSeconds = 0;
    }
    countSeconds++;
} , 500);

var rectanglesPositionY;
setInterval( () => {
    rectangles = document.getElementsByClassName("rectangle");
    for(let i = 0; i < rectangles.length; i++){ 
        rectanglesPositionY = parseInt(rectangles[i].getAttribute("y"));
        rectangles[i].setAttribute("y", rectanglesPositionY + 24);
    }
} , 12000);