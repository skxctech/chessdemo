
import { Direction } from '../interfaces/control';
import { Piece } from './piece';
import { IMoveData } from '../interfaces/piece';

export class Pawn extends Piece {
    constructor(data) {
        super({
            name: 'Pawn',
            icon: 'pawn',
            control: {
                direction: [Direction.Y],
                negativeDirection: false,
                jump: false,
                travelLimit: 1,
            },
            player: data.player
        });
    }

    move(data: IMoveData): boolean {

        // permit conquer only on 1 travelLimit XY
        if (data.conquering) {
            let diff = data.coords.sx - data.coords.dx;
            if (diff < 0) { diff *= -1; }
            if (diff !== 1) {
                return false;
            } else {
                return true;
            }
        }

        if (super.move(data)) {
            // block negative Y movement
            if (data.coords.dy - data.coords.sy < 0) {
                return false;
            }

            return true;

        }

        return false;
    }
}
