class Hero{
    constructor(x, y,r) {
      var options = {
          'frictionAir':0.2,
          'density':2
          
      }
      this.body = Bodies.circle(x, y, r, options);
      this.r = r;
      this.x = x;
      this.y = y;
      this.image = loadImage("images/Superhero.png");
      World.add(world, this.body);
    }
    display(){

      push();
      translate(this.body.position.x, this.body.position.y);
      imageMode(CENTER)
      image(this.image, 0, 0,this.radius*2);
      pop();
    }
  };
  