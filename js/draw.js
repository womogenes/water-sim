import { collide } from './utils.js';

const draw = () => {
  background(20);

  for (let m of molecules) {
    m.update();
  }

  for (let m of molecules) {
    m.display();
  }

  // Some collisions
  for (let i = 0; i < molecules.length; i++) {
    for (let j = i + 1; j < molecules.length; j++) {
      for (let x = 0; x < 3; x++) {
        for (let y = 0; y < 3; y++) {
          const a = molecules[i].atoms[x];
          const b = molecules[j].atoms[y];
        }
      }
    }
  }

  // Charges
  /* for (let i = 0; i < molecules.length; i++) {
    for (let j = i + 1; j < molecules.length; j++) {
      const a = molecules[i];
      const b = molecules[j];

      let d = Vector.sub(a.pos, b.pos);
      d.div(pow(d.mag(), 3));
      d.mult(10);

      a.vel.sub(d);
      b.vel.add(d);
    }
  } */
};

export { draw };
