class Keeper{
    constructor(x,y,w,h){
       var options = {
         isStatic : true

       }
       this.body = Bodies.rectangle(x,y,w,h,options);
       this.x = x;
       this.y = y;
       this.width = w;
       this.height = h;
       this.img = loadImage("./assets/goalkeeper.png");
       World.add(world,this.body);
    }
    display(){
      var pos = this.body.position;
      push();
      image(this.img,pos.x,pos.y,this.width,this.height);
      pop();
    }
}