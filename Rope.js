class Rope{
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 250
        }
        this.pointB = pointB
        this.rope = Constraint.create(options);
        World.add(world1, this.rope);


    }

    display() {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
        strokeWeight(4);
        stroke("yellow")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}