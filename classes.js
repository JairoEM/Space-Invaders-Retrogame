export class Defender{
    constructor(){ 
        this.lifes = 5;
        this.svg = document.getElementById("table");
        this.svgNS= svg.namespaceURI;
        this.object = document.createElementNS(svgNS,'rect');
        this.x = 120;
        this.y = 390;
        this.width = 10;
        this.height = 10;

        this.object.setAttribute('x', this.x);
        this.object.setAttribute('y', this.y);
        this.object.setAttribute('width', this.width);
        this.object.setAttribute('height', this.height);
        this.object.setAttribute('class', 'player');
        this.object.setAttribute('fill','blue');
    }

    newStart(){
        this.lifes = 5;
    }

    getLifes(){
        return this.lifes;
    }

    lifeUp(){
        this.lifes++;
    }

    lifeDown(){
        this.lifes--;
    }
}


export class Bullet{
    constructor(cx, svgNS){
        this.damage = 1;
        this.object = document.createElementNS(svgNS,'circle');
        this.cx = cx;
        this.cy = 386;
        this.r = 2;

        this.object.setAttribute('cx', this.cx);
        this.object.setAttribute('cy', this.cy);
        this.object.setAttribute('r', this.r);
        this.object.setAttribute('class', 'circle');
        this.object.setAttribute('fill','black');
    }
        
    increaseDamage(){
        this.damage++;
    }

    decreaseDamage(){
        if(this.damage <= 2){
            this.damage--;
        }else{
            return null;
        }
    }
}


export class Invader{
    constructor(color, health, points){
        this.color = color;
        this.health = health;
        this.points = points;
    }

    loseLife(){
        this.health--;
    }

    getHealth(){
        return this.health;
    }

    getPoints(){
        return this.points;
    }
}