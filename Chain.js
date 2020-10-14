class chain{
    constructor(bodyA,pointB)
    {
        var op={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness: 0.04
        }
        this.pointB=pointB
        this.chainObject=Constraint.create(op);
        World.add(world,this.chainObject);
    }
    fly()
    {
     this.chainObject.bodyA=null;

    }
    display()
    {
        if(this.chainObject.bodyA)

        {strokeWeight(8);
        line(this.chainObject.bodyA.position.x,this.chainObject.bodyA.position.y,this.chainObject.pointB.x,this.chainObject.pointB.y);
    }}
}
