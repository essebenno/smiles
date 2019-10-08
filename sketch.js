var mySmile ;

function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);

  mySmile = new Smile (random()*windowWidth, random()*windowHeight, 60, 2);
}

function draw() {
  stroke('white');
  fill ('black');

  //mySmile.move();
  mySmile.display();
  // put drawing code here
}

function Smile (_xPos, _yPos, _size, _speed ){
  this.x = _xPos;
  this.y = _yPos;
  this.size = _size;

  this.speed = _speed;

  var xIncrease = 1;
  var yIncrease = 1;

  this.move = function(){
    this.x += this.speed * xIncrease;
    this.y += this.speed * yIncrease;

    if(this.x > windowWidth || this.x <0 ){
      xIncrease = -xIncrease;
    }
    if(this.y > windowHeight || this.y <0 ){
      yIncrease = -yIncrease;
    }
  }

  this.display = function(){
    ellipse(this.x, this.y, this.size);

    //push();
      translate(0,0);
      //eye sx
      fill('white');
      ellipse(this.x-10,this.y-10,20);

    //pop();

  }
}
