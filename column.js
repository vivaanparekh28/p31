class Column{
    constructor(x){
        this.body=Bodies.rectangle(x,560,20,250,{isStatic:true})
        World.add(world,this.body)
    }
    display(){
        rectMode(CENTER)

        rect(this.body.position.x,560,20,250)
    }
   
}