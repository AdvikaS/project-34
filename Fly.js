class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10,
            strokeWeight:0
        }
        this.Fly = Constraint.create(options);
        World.add(world, this.Fly);
        this.pointB= pointB;
    }

    display(){
        if(this.Fly.bodyA){
            var pointA = this.Fly.bodyA.position;
            var pointB = this.Fly.pointB.position;
            strokeWeight(4);
            line(pointA.x, pointA.y,20,20);
        }
    }
    
}