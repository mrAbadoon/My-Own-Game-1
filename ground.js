class Ground{
      constructor(x,y,w,h)
      {
          var options = {
              isStatic : true
          }
          this.body = Bodies.rectangle(x,y,w,h,options);
          this.x = x;
          this.y = y;
          this.width = w;
          this.height = h;
          World.add(world,this.body);
          
      }
      display(){
          var pos = this.body.position;
          push();
          rectMode(CENTER);
          noStroke();
          fill("#1DCB20")
          rect(pos.x,pos.y,this.w,this.h);
          pop();
      }
}