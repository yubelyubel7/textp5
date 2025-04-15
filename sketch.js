var font;
let points = [];
let textString = "What The Sigma!?";
let fontSize = 144;

function preload() {
  font = loadFont('./data/PlayfulTime-BLBB8.ttf');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  background(250, 60, 40);
  
  // Calculate text width to properly center it
  textFont(font);
  textSize(fontSize);
  let textWidth = font.textBounds(textString, 0, 0, fontSize).w;
  
  points = font.textToPoints(textString, width/2 - textWidth/2, height/2, fontSize, {
    sampleFactor: 0.2, // level of detail
  })
}

function draw() {
  xMapped = map(mouseX, 0, width, 4, 32);
  for (let p of points) {
    circle(p.x, p.y, xMapped);
  }
}