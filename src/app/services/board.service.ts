import { Injectable } from '@angular/core';
import { Block } from '../models/block';
import { Pawn } from '../models/pawn';
import { Rook } from '../models/rook';
import { Knight } from '../models/knight';
import { Bishop } from '../models/bishop';
import { Queen } from '../models/queen';
import { King } from '../models/king';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  private boardSize = 8;
  public data = [];

  constructor() {
    this.data = Array.from({length: this.boardSize}, (_, y) => {
      return Array.from({length: this.boardSize}, (__, x) => {
        return new Block(x, y);
      });
    });
  }

  initDefault() {
    this.data[1].forEach(block => {
      block.piece = new Pawn({player: 1});
    });

    this.data[0][7].piece = new Rook({player: 1});
    this.data[0][6].piece = new Knight({player: 1});
    this.data[0][5].piece = new Bishop({player: 1});
    this.data[0][4].piece = new King({player: 1});
    this.data[0][3].piece = new Queen({player: 1});
    this.data[0][2].piece = new Bishop({player: 1});
    this.data[0][1].piece = new Knight({player: 1});
    this.data[0][0].piece = new Rook({player: 1});

    this.data[6].forEach(block => {
      block.piece = new Pawn({player: 0});
    });

    this.data[7][7].piece = new Rook({player: 0});
    this.data[7][6].piece = new Knight({player: 0});
    this.data[7][5].piece = new Bishop({player: 0});
    this.data[7][4].piece = new King({player: 0});
    this.data[7][3].piece = new Queen({player: 0});
    this.data[7][2].piece = new Bishop({player: 0});
    this.data[7][1].piece = new Knight({player: 0});
    this.data[7][0].piece = new Rook({player: 0});

  }

  // TODO refactor
  blockCheck(coords): boolean {

    const blocks = [];

    // Y is the index used for grid intersection
    const processXY = (y, op) => {

      let x;

      if (coords.sx !== coords.dx) {

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

      blocks.push(this.data[y][x]);

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
      for (let i = min + 1; i < max; i++) {
        const block = this.data[coords.sy];
        blocks.push(block[i]);
      }

    }

    // easy debug
    // blocks.forEach(block => block.active = true);

    return blocks.some(block => block.piece);

  }



}
