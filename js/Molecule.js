import { Ball } from './Ball.js';

class Molecule {
  constructor(pos, rot) {
    this.atoms = [];
    this.atoms.push(
      new Ball(
        Vector.add(pos, new Vector(8, 0).rotate(0)),
        Vector.random2D().mult(0),
        1,
        5,
        '#ffffff'
      )
    );
    this.atoms.push(
      new Ball(
        Vector.add(pos, new Vector(8, 0).rotate(1.911)),
        Vector.random2D().mult(0),
        1,
        5,
        '#ffffff'
      )
    );
    this.atoms.push(new Ball(pos, Vector.random2D(), -2, 10, '#ff0000'));
  }

  update() {
    for (let atom of this.atoms) {
      atom.update();
    }

    let bond1 = Vector.sub(this.atoms[2].pos, this.atoms[0].pos);
    let bond2 = Vector.sub(this.atoms[2].pos, this.atoms[1].pos);

    bond1.mult(bond1.mag() - 8);
    bond2.mult(bond2.mag() - 8);

    this.atoms[0].acc.add(bond1.mult(0.1));
    this.atoms[1].acc.add(bond2.mult(0.1));
  }

  display() {
    for (let atom of this.atoms) {
      atom.display();
    }
  }
}

export { Molecule };
