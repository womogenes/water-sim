const RESTITUTION = 0.99;

const collide = (a, b) => {
  // get the mtd
  let delta = Vector.sub(a.pos, b.pos);
  let d = delta.mag();
  // minimum translation distance to push balls apart after intersecting
  let mtd = Vector.mult(delta, (a.radius + b.radius - d) / d);

  // resolve intersection --
  // inverse mass quantities
  let im1 = 1 / a.mass;
  let im2 = 1 / b.mass;

  // push-pull them apart based off their mass
  a.pos.add(Vector.mult(mtd, im1 / (im1 + im2)));
  b.pos.sub(Vector.mult(mtd, im2 / (im1 + im2)));

  // FROM HERE ON, WE USE mtd NORMALIZED
  mtd.normalize();

  // impact speed
  let v = Vector.sub(a.vel, b.vel);
  let vn = v.dot(mtd);

  // sphere intersecting but moving away from each other already
  if (vn > 0) return;

  // collision impulse
  let i = (-(1 + RESTITUTION) * vn) / (im1 + im2);
  let impulse = Vector.mult(mtd, i);

  // change in momentum
  a.acc.add(Vector.mult(impulse, im1));
  b.acc.sub(Vector.mult(impulse, im2));
};

export { collide };
