import { Piece } from './piece';


export class Block {
    piece: Piece;
    x: number;
    y: number;
    active = false;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
