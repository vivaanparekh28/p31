class Particle{
constructor(x){
    this.body=Bodies.circle(x,0,14,{restitution:1})
    this.color=color(random(0,255), random(0,255), random(0,255))
    World.add(world,this.body)
    

}
display(){
    push()

fill(this.color)
ellipseMode(RADIUS)
ellipse(this.body.position.x,this.body.position.y,14,14)

    pop()
}
}