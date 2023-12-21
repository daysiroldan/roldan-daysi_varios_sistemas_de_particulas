// let p;
let s;
let v;

function setup() {
  createCanvas(windowWidth, windowHeight);
  // p = new Particula(width / 2, height / 2);
  s = new Sistema();
  v = new Sistema();
}

function draw() {
  // background(255, 20);

  // circle(mouseX, mouseY, 20);
  // if (p.isAlive) {
  //   p.update();
  //   p.display();
  // }
  s.update();
  s.display();
  v.update();
  v.display();


}
