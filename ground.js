class Ground{
    constructor(){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(250,690 ,500, 20, options);
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER)
        rect(250, 690, 500, 20);
       
    }
}