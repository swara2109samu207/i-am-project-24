class Paper{
    constructor(x,y,radius){
var options ={
 isStatic:false,
 'restitution':0.3,
  'friction' :0.5,
  'denstiy':1.2   
}
this.body = Bodies.circle(this.x,this.y,this.radius,options);
this.radius = radius

World.add(world,this.body);
}
display(){
  
  push();
  translate(this.body.position.x,this.body.position.y)
  ellipseMode(RADIUS);
  fill("pink");

ellipse(0,0,this.radius,this.radius);
pop();
}
}