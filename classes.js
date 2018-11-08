class Defender{
    constructor(box, color){
        this.color = color;
        this.box = box;
        this.lifes = 5;
    }

    newStart(){
        this.lifes = 5;
    }

    lifeUp(){
        this.lifes++;
    }

    lifeDown(){
        this.lifes--;
    }
}

class Shoot{
    constructor(){
        this.size = 2;
    }

    increaseSize(){
        this.size++;
    }

    decreaseSize(){
        this.size--;
    }
}

class Invader{
    constructor(size, color, lifes){
        this.size = size;
        this.color = color;
        this.lifes = lifes;
    }

    loseLife(){
        this.lifes--;
    }
}