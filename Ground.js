class Ground {
    constructor(x, y, width, height) {
      var options = {
        isStatic: 1
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world1, this.body);
    }

    display() {
        var pos = this.body.position;
        fill("brown");
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);

    }
}