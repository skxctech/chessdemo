import { Injectable } from '@angular/core';
import { Block } from '../models/block';
import { BoardService } from './board.service';

@Injectable({
  providedIn: 'root'
})
export class ChessActionService {

  public source: Block;
  public destination: Block;

  constructor(private board: BoardService) {}

  move() {
    if (this.ruleCheck()) {
      this.destination.piece = this.source.piece;
      delete this.source.piece;
    }
  }

  ruleCheck() {

    if (this.destination.piece && this.destination.piece.player === 0) {
      console.error('own piece present');
      return false;
    }

    const coords = {
      sx: this.source.x,
      sy: this.source.y,
      dx: this.destination.x,
      dy: this.destination.y
    };

    const pathing = this.basePathing(coords);
    console.log(pathing);
    if (pathing.normal || pathing.diagonal || pathing.knight) {
      return this.source.piece.move({
        pathing,
        coords,
        blocked: this.board.blockCheck(coords),
        conquering: this.destination.piece ? true : false
      });
    } else {
      console.error('failed initial path check!');
      return false;
    }

  }

  basePathing(coords) {
    const pattern = {
      normal: false,
      diagonal: false,
      knight: false
    };

    // move X or Y
    if (coords.sx === coords.dx || coords.sy === coords.dy) {
      pattern.normal = true;
    }

    // standardize direction
    let c1 = coords.sx - coords.dx;
    let c2 = coords.sy - coords.dy;
    if (c1 < 0) { c1 *= -1; }
    if (c2 < 0) { c2 *= -1; }

    // move diagonally, XY
    if (c1 === c2) {
      pattern.diagonal = true;
    }

    // move L (knight path)
    if ((c1 === 1 && c2 === 2) || (c2 === 1 && c1 === 2)) {
      pattern.knight = true;
    }

    return pattern;

  }

}
