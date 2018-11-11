export class Defender{
    constructor(spaceship, bullet){
        this.spaceship = spaceship;
        this.bullet = bullet;  
        this.lifes = 5;
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
    constructor(){
        this.size = 1;
    }

    increaseSize(){
        this.size++;
    }

    decreaseSize(){
        this.size--;
    }

    getBullet(){
        return this.size;
    }
}


export class Invader{
    constructor(color, lifes, points){
        this.color = color;
        this.lifes = lifes;
        this.points = points;
    }

    loseLife(){
        this.lifes--;
    }

    getPoints(){
        return this.points;
    }
}