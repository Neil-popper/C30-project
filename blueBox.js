class Box {

    constructor(x, y, width, height) {
        var options = {

            isStatic: false,
            restitution: 0.1,
            frictions: 0.01,
            density:0.02

        }

        this.body = Bodies.rectangle(x, y, width, height, options);

        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        strokeWeight(2);
        fill("blue");
        rect(pos.x, pos.y, this.width, this.height);
        if (this.body.speed<3) {    
          } else{
            this.visibility = this.visibility-5
            World.remove(world, this.body)
            push()
           tint(0,this.visibility)
           pop()
          }

    }
}