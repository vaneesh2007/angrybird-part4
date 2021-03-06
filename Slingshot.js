class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.Sling1=loadImage("sprites/Sling1.png")
        this.Sling2=loadImage("sprites/Sling2.png")
        this.Sling3=loadImage("sprites/Sling3.png")
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        image (this.Sling1,200,20)
        image (this.Sling2,170,20)
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            push ()
            strokeWeight(4);
            line(pointA.x-25, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x-20,pointA.y,pointB.x+30,pointB.y-3)
            image (this.Sling3,pointA.x-30,pointA.y-10,15,30)
            pop ()
        }
    }
    
}