class Box{
    constructor(x,y){
        var options = {
            restitution :1
        }
        this.body = Bodies.rectangle(x, y, 50,50, options);
        this.w =50
        this.h =50;
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;

        fill("purple");
        rectMode(CENTER);
        rect(pos.x, pos.y,this.w, this.h);

    }
}