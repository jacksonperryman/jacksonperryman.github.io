var widthLimit = 0;
var heightLimit = 0;
var counter = 0;

function setup() {
  createCanvas(400, 400);
  background(300);
	getcolor();
	
}
function getcolor() {
	r = random(255);
  g = random(255);
  b = random(255);
}
function draw() {
  background(300);
	
  for (var i = 0; i <= widthLimit; i = i + 100) {
    for (var j = 0; j <= heightLimit; j = j + 100) {
      push();
      translate(i, j);
			// scale(mouseX / width);
      smiley();
      pop();
    }
  }
  counter = counter + 1;

  if (counter % 20 === 0) {
    if (widthLimit == width) {
      widthLimit = 0;
      heightLimit = heightLimit + 100;
    } else {
      widthLimit = widthLimit + 100;
    }
    if (heightLimit >= height) {
      heightLimit = 0;
    }
  }
}

function mousePressed() {
	getcolor();
}

function smiley() {

	noStroke();
  // smiley face
  fill(r, g, b);
  ellipse(50, 50, 100, 100);
  //smiley eyes + mouth
  fill(0);
  ellipse(30, 40, 10, 10);
  ellipse(70, 40, 10, 10);
  arc(50, 60, 40, 30, radians(0), radians(180));
}