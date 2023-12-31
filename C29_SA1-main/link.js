class Link {
    constructor(bodyA, bodyB){
        var lastLink = bodyA.body.bodies.length-2;
        this.link = Constraint.create({
            bodyA:bodyA.body.bodies[lastLink],
            pointA:{x:0,y:0}, //pointA and body is the connection - connect point to body
            bodyB:bodyB,
            pointB:{x:0,y:0},
            length:-10,
            stiffness:0.01, //flexibility

        })

        World.add(engine.world, this.link) //putting link into world
    }
}

