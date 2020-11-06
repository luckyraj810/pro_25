class Paper {
    constructor(x, y, radius) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
      }
      this.x=x;
      this.y=y;
      this.radius=radius;
      this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
      this.image=loadImage("PAPER.png");
      //this.image=fill("pink")   
     //console.debug("this.image")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      
      push();
     
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER);
      fill(255);
      image(this.image, 0,0,70,70);
     
     // ellipse(0, 0, this.radius,this.radius);
      
      pop();
    }
  }