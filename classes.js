class Defender{
    constructor(box, color){
        this.box = box;
        this.color = color;  
        this.lifes = 5;
        this.position;
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

    getColor(){
        return this.color;
    }

    changeColor(newColor){
        this.color = newColor;
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