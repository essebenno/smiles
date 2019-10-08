var allMyBalls = [];
var amountOfBalls = 30;
var aBall = new Ball(300, 300, 50);
var ballColors = ['#ffd700', '#2274a5', '#f75c03' , '#d90368' , '#17bebb', 0];


function preload(){
  // put preload code here
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(240);

  for(var i = 0 ; i < amountOfBalls ; i++){
    var tempX = random() * windowWidth;
    var tempY = random() * windowHeight;
    var tempRad = random() * 80 + 30;
    var tempColor = random() * 5;
    tempColor = Math.floor(tempColor);

    var tempBall = new Ball (tempX, tempY, tempRad, ballColors[tempColor]);

    allMyBalls.push(tempBall);
  }
  console.log(allMyBalls.length);
}

function draw() {

  //aBall.move();
  //aBall.display();
  noStroke();
  for(var i  = 0; i < allMyBalls.length; i++){
    var tempBall = allMyBalls[i];
    tempBall.move();
    tempBall.display();
  }
}

// function mouseReleased(){
//   console.log('released');
//   fill('deeppink');
//   ellipse(mouseX,mouseY,random( 20, 50))
//}

function Ball(_x, _y, _diameter, _color){
  this.size = _diameter;
  this.x    = _x;
  this.y    = _y;
  this.color = _color;
  this.speed = 10;

  var xIncrease = this.speed;
  var yIncrease = this.speed;

  this.move = function(){
    this.x += this.speed * xIncrease;
    this.y += this.speed * yIncrease;

    if(this.y > windowHeight  || this.y < 0 ){
      yIncrease = -yIncrease;
    }

    if(this.x > windowWidth  || this.x < 0 ){
      xIncrease = -xIncrease;
    }
   }

  this.display = function(){
    fill(this.color);
    ellipse(this.x , this.y , this.size);

  //smile attempt
    push();
    translate(this.x, this.y);
    //face
    //ellipse(0,0,this.size);

    //eyes
    noStroke();
    fill(0);
    ellipse(-this.size/4, -this.size/5, this.size/10);
    ellipse(this.size/4, -this.size/5, this.size/10 );



    //mouth
    fill(255);
    angleMode(DEGREES);
    //arc(0, this.size/4, this.size/4, 0, 180, PIE);
    arc(0,0,this.size/2,this.size/2,0, 180, PIE);

    pop();

  }
}
