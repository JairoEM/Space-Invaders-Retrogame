export class Defender{
    constructor(){ 
        this.object = document.createElementNS("http://www.w3.org/2000/svg",'rect');
        this.x = 120;
        this.y = 390;
        this.width = 10;
        this.height = 10;

        this.lifes = 5;

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
    constructor(cx){
        this.object = document.createElementNS("http://www.w3.org/2000/svg",'circle');
        this.cx = cx;
        this.cy = 386;
        this.r = 2;

        this.damage = 1;

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
    constructor(x, health, points){
        this.object = document.createElementNS("http://www.w3.org/2000/svg",'rect');
        this.x = x;
        this.y = 0;
        this.width = 16;
        this.height = 16;

        this.health = health;
        this.points = points;

        this.object.setAttribute('x', this.x);
        this.object.setAttribute('y', this.y);
        this.object.setAttribute('width', this.width);
        this.object.setAttribute('height', this.height);
        this.object.setAttribute('class', 'rectangle');
        this.object.setAttribute('fill','purple');
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