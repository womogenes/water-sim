class Ball {
  constructor(pos, vel, charge, radius, color) {
    this.pos = pos;
    this.vel = vel;
    this.charge = charge;
    this.radius = radius;
    this.color = color;

    this.acc = new Vector();
  }

  update() {
    this.vel.add(this.acc);

    this.acc.x = 0;
    this.acc.y = 0;

    this.pos.add(this.vel);
    if (this.pos.x > width - this.radius) {
      this.pos.x = width - this.radius;
      this.vel.x *= -1;
    }
    if (this.pos.x < this.radius) {
      this.pos.x = this.radius;
      this.vel.x *= -1;
    }
    if (this.pos.y > height - this.radius) {
      this.pos.y = height - this.radius;
      this.vel.y *= -1;
    }
    if (this.pos.y < this.radius) {
      this.pos.y = this.radius;
      this.vel.y *= -1;
    }
  }

  display() {
    push();
    translate(this.pos.x, this.pos.y);

    ellipseMode('CENTER');
    noStroke();
    fill(this.color);
    ellipse(0, 0, this.radius * 2, this.radius * 2);
    pop();
  }
}

export { Ball };
