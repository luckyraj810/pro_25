class p2 {
    constructor(x,y,width,height) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
      }
      this.x=x;
      this.y=y;
      this.width = width;
      this.height = height;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(this.body.position.x, this.body.position.y);
      rectMode(CENTER);
      fill('red');
      rect(pos.x, pos.y, this.width, this.height);
      pop();
    }
  };