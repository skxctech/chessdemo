
import { Direction } from '../interfaces/control';
import { Piece } from './piece';
import { IMoveData } from '../interfaces/piece';

export class King extends Piece {
    constructor(data) {
        super({
            name: 'King',
            icon: 'king',
            control: {
                direction: [Direction.XY, Direction.X, Direction.Y],
                negativeDirection: true,
                jump: false,
                travelLimit: 1,
                upgradeable: false
            },
            player: data.player
        });
    }

    move(data: IMoveData): boolean {

        // no jumping
        if (data.blocked && !this.control.jump) {
            return false;
        }

        // set travel limit
        if (data.coords.dy - data.coords.sy > 1) {
            return false;
        }

        return true;
    }
}
