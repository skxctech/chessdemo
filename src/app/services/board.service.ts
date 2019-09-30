import { Injectable } from '@angular/core';
import { Block } from '../models/block';
import { Pawn } from '../models/pawn';
import { Rook } from '../models/rook';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardSize = 8;
  public data = [];

  constructor() {
    let y = 8;
    this.data = Array.from({length: this.boardSize}, () => {
      y--;
      return Array.from({length: this.boardSize}, (_, x) => {
        return new Block(x + 1, y + 1);
      });
    });
  }

  initDefault() {
    this.data[1].forEach(block => {
      block.piece = new Pawn({player: 1});
    });
      // this.data[6].forEach(block => {
      //   block.piece = new Pawn({player: 0});
      // });

    this.data[5][5].piece = new Rook({player: 0});
    this.data[5][3].piece = new Pawn({player: 1});
    this.data[5][1].piece = new Pawn({player: 0});
  }

  // TODO refactor this
  blockCheck(coords): boolean {

    const blocks = [];

    const mirror = Array.from({length: this.boardSize}, (_, i) => i).reverse();

    // Y is the index used for grid intersection
    const processXY = (y, op) => {

      // adjust for Y selection
      y--;

      // mirror the array for index selection;
      const mirrorY = mirror[y];

      let x;

      if (coords.sx !== coords.dx) {

        // adjust for XY selection
        y++;

        // if block was also moved on X,
        // determine the coords from the Y diff
        let xdiff = y - coords.sy;
        if (op === 'add') {
          xdiff *= -1;
        }
        if (coords.sx - coords.dx > 0) {
          x = coords.sx + xdiff;
        } else {
          x = coords.sx - xdiff;
        }
      } else {
        x = coords.sx;
      }

      blocks.push(this.data[mirrorY][x - 1]);

    };

    // Y, XY movement
    if (coords.sy - coords.dy > 0) {

      for (let i = coords.sy - 1; i > coords.dy; i--) { processXY(i, 'subtract'); }

    } else if (coords.sy - coords.dy < 0) {

      for (let i = coords.sy + 1; i < coords.dy; i++) { processXY(i, 'add'); }

    // X movement
    } else if (coords.sy === coords.dy) {

      const min = Math.min(coords.sx, coords.dx);
      const max = Math.max(coords.sx, coords.dx);
      for (let i = min; i < max - 1; i++) {
        const block = this.data[mirror[coords.sy - 1]];
        blocks.push(block[i]);
      }

    }

    // easy debug
    // blocks.forEach(block => block.active = true);

    return blocks.some(block => block.piece);

  }



}
