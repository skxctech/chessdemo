import { Injectable } from '@angular/core';
import { Block } from '../models/block';
import { Pawn } from '../models/pawn';
import { isObject } from 'util';

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
    this.data[6].forEach(block => {
      block.piece = new Pawn({player: 0});
    });

    this.data[5][3].piece = new Pawn({player: 1});
    this.data[5][1].piece = new Pawn({player: 0});
  }

  // TODO refactor this
  blockCheck(coords): boolean {

    const blocks = [];

    const mirror = Array.from({length: this.boardSize}, (_, i) => {
      return i + 1;
    }).reverse();

    const processXY = (y, op) => {

      const mirrorY = mirror[y - 1];

      let x;
      if (coords.sx !== coords.dx) {
        // if block was also moved on X,
        // determine the coords from the Y diff
        const xdiff = y - coords.sy;
        if (coords.sx - coords.dx > 0) {
          x = coords.sx - xdiff;
        } else {
          x = coords.sx + xdiff;
        }
      } else {
        x = coords.sx;
      }

      blocks.push(this.data[mirrorY - 1][x - 1]);

    };

    // there has to be a better way
    if (coords.sy - coords.dy > 0) {
      for (let i = coords.sy - 1; i > coords.dy; i--) { processXY(i, 'subtract') }
    } else if (coords.sy - coords.dy < 0) {
      for (let i = coords.sy + 1; i < coords.dy; i++) { processXY(i, 'add') }
    } else if (coords.sy === coords.dy) {
      const min = Math.min(coords.sx, coords.dx);
      const max = Math.max(coords.sx, coords.dx);
      for (let i = min; i < max - 1; i++) {
        blocks.push(this.data[mirror[coords.sy]][i]);
      }
    }

    return blocks.some(block => block.piece);

  }



}
