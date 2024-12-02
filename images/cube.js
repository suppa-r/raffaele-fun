console.clear();

const count = 2000;
const dots = [];

const maxRad = Math.min(window.innerWidth, window.innerHeight) * .5;
const startRad = maxRad * .025;
const endRad = maxRad * .9;
const playRad = endRad - startRad;

const bgHue = Math.floor(Math.random() * (360));
const fgHue = (bgHue + 180) % 360;

class Dot {
  constructor(){
    this.reset();
    this.life = Math.random();
  }
  reset(){
    this.angle = random(TAU);
    this.life = 0;
    this.rand = Math.random() * 1000;
    this.speed = Math.random() * .01;
    this.angleSpeed = Math.random() * .001 * (Math.random() > .5 ? 1 : -1);
    this.saturation = 10 + (Math.random() *90);
    let hueVariance = 20;
    this.hue = fgHue + (Math.floor(Math.random() * hueVariance) - (hueVariance*.5));
    let sizeVariance = max(width,height)*.05;
    this.size = (sizeVariance * .2) + (Math.floor(Math.random() * sizeVariance) - (sizeVariance*.8));
  }
  update (){
    this.life += this.speed;
    this.angle += this.angleSpeed;
    if(this.life > 1) this.reset();
  }
  point (a) {
    return a * (startRad + (playRad * this.life));
  }
  draw (){
    this.update();
    const alpha = Math.sin(this.life * Math.PI) ** 4;
    fill(this.hue,this.saturation,100,100 * alpha);
    const n = noise(frameCount * .01, this.angle, this.rand);
    const angle = this.angle + n;
    let x = this.point(Math.cos(angle));
    let y = this.point(Math.sin(angle));
    ellipse(x,y,this.size,this.size);
  }
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  noStroke();
  colorMode(HSB,360,100,100,100);
  for(let i = 0; i < count; i++)  {
    dots.push(new Dot())
  }
}

function draw() {
  background(bgHue,10,100,17);
  translate(width*.5,height*.5);
  dots.forEach(dot=>dot.draw());
  fill(0,0,0,100);
}


