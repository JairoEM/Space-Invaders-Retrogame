import {Defender, Bullet, Invader} from "./classes.js";

// Create objects
var svg = document.getElementById("table");
var defender = new Defender();
svg.appendChild(defender.object);

// Create usefull variables
var imgForsen = document.getElementById("mySpaceship");
defender.object.setAttribute('fill', 'url(#mySpaceship)');
var laser;
var x;
var key;
var imgLose;
var tryAgain;

var bullet;
var bulletPositionCX;
var bulletPositionCY;

var invaders = new Array();
var invaderPositionX;
var invaderPositionY;
var invadersMoveX = 1;
var countX = 8;
var countY = 2;


// Create function to move the defender's spaceship
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


//Interval to create the invaders
function createInitialInvaders(){
    for(let i = 12; i <= 250; i = i+35){
        var invader = new Invader(i-2, 3, 20);
        svg.appendChild(invader.object);
        invaders.push(invader);
    }
}
createInitialInvaders();


//Interval to make shoots move
setInterval( () => {
    bullet = document.getElementsByClassName("circle");
    for(let i = 0; i < bullet.length; i++){ 
        bulletPositionCY = parseInt(bullet[i].getAttribute("cy"));
        bullet[i].setAttribute("cy", bulletPositionCY - 2);

        if(bulletPositionCY <= 0){
            svg.removeChild(bullet[i]);
        }
    }  
    
    for(let k = 0; k < invaders.length; k++){
        invaderPositionX = parseInt(invaders[k].object.getAttribute("x"));
        invaderPositionY = parseInt(invaders[k].object.getAttribute("y"));

        if(invaderPositionY >= 390){
            imgLose = document.getElementById("imgLose");
            imgLose.style.display = "block";
            tryAgain = document.getElementById("tryAgain");
            tryAgain.style.display = "block";
            clearInterval(intervalB);
                  
        }

        for(let j = 0; j < bullet.length; j++){
            bulletPositionCX = parseInt(bullet[j].getAttribute("cx"));
            bulletPositionCY = parseInt(bullet[j].getAttribute("cy"));

            if((bulletPositionCY >= invaderPositionY) && (bulletPositionCY <= invaderPositionY+16)){
                if((bulletPositionCX >= invaderPositionX) && (bulletPositionCX <= invaderPositionX+16)){
                    invaders[k].loseHealth();

                    if(invaders[k].getHealth() <= 0){
                        svg.removeChild(invaders[k].object);
                    }
                    svg.removeChild(bullet[j]);
                }
            }
        }
    }    
}, 10);


// Invaders move in X and Y axes and create a new row
var intervalB = setInterval( () => {
    for(let i = 0; i < invaders.length; i++){
        if(invadersMoveX % 2 == 0){
            invaderPositionX = parseInt(invaders[i].object.getAttribute("x"));
            invaders[i].object.setAttribute("x", invaderPositionX + 2);
        }else{
            invaderPositionX = parseInt(invaders[i].object.getAttribute("x"));
            invaders[i].object.setAttribute("x", invaderPositionX - 2);
        }     
    }
    if(countX == 12){
        invadersMoveX++;
        countX = 0;
    }
    countX++;

    if(countY == 24){
        for(let i = 0; i < invaders.length; i++){ 
            invaderPositionY = parseInt(invaders[i].object.getAttribute("y"));
            invaders[i].object.setAttribute("y", invaderPositionY + 24);
        }
    
        for(let i = 12; i <= 250; i = i+35){
            var invader = new Invader(i, 3, 20);
            svg.appendChild(invader.object);
            invaders.push(invader);
        }
        countY=0;  
    }
    countY++;
} , 10);