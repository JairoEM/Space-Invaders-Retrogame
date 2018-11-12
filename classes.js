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
        this.damage = 1;
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

    getBullet(){
        return this.damage;
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