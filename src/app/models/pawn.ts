
import { Direction, Conquer } from '../interfaces/control';
import { Piece } from './piece';
import { IMoveData } from '../interfaces/piece';

export class Pawn extends Piece {
    constructor(data) {
        super({
            name: 'Pawn',
            icon: 'pawn',
            control: {
                direction: [Direction.Y],
                conquer: [Conquer.DG],
                negativeDirection: false,
                jump: false,
                travelLimit: 1,
                upgradeable: true
            },
            player: data.player
        });
    }

    move(data: IMoveData): boolean {

        // pawns can't jump
        if (data.blocked && !this.control.jump) {
            return false;
        }

        // permit conquer only on 1 travelLimit XY
        if (data.conquering) {
            let diff = data.coords.sx - data.coords.dx;
            if (diff < 0) { diff *= -1; }
            if (diff !== 1) {
                return false;
            }
        }

        // block negative Y movement
        if (data.coords.dy - data.coords.sy < 0) {
            return false;
        }

        // set direction limit
        if (data.coords.sx !== data.coords.dx && !data.conquering) {
            return false;
        }

        // set travel limit
        if (data.coords.dy - data.coords.sy > 1) {
            return false;
        }

        return true;
    }
}
