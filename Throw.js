class Throw{
    constructor(bodyA,pointB){
        var option = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.01,
            lenth:10
        }
        this.point = pointB;
        this.throw = Constraint.create(options);
        World.add(world,this.throw);
    }

    fly(){
        this.throw.bodyA = null;
    }

    Launch(bodyA){
        this.throw.bodyA = bodyA;
    }

    display(){
        
    }
}