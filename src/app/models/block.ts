import { Pawn } from './pawn';

export class Block {
    Pawn: Pawn;
    x: number;
    y: number;
    active: boolean = false;
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}