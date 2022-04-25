import { draw } from './draw.js';
import { Molecule } from './Molecule.js';

window.Vector = p5.Vector;

window.molecules = [];

window.setup = () => {
  const canvas = createCanvas(800, 600);
  canvas.parent(document.querySelector('#sketch-container'));

  for (let i = 0; i < 10; i++) {
    molecules.push(
      new Molecule(new Vector(random(0, width), random(0, height)), 0)
    );
  }
};

window.draw = draw;
