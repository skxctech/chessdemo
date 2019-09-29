
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

        // piece specific check
        console.log('data coming in piece move', data);
        if (data.blocked && !this.control.jump) {
            return false;
        }

        return true;
    }
}
