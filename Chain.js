class Chain{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.5            
        }
       // this.chain = loadImage('sprites/sling1.png');
       
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
   
   display(){
       var pos1=this.chain.bodyA.position
       var pos2=this.chain.bodyB.position

       // image(this.chain,200,20);
        
     
           // var pointA = this.sling.bodyA.position;
           // var pointB = this.sling.bodyB.position;
           
                strokeWeight(5);
            
                line(pos1.x , pos1.y, pos2B.x , pos2B.y);
               
    }
    
}